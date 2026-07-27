import { describe, expect, test } from 'bun:test';

const stylesheet = async (relativePath: string) =>
  Bun.file(new URL(relativePath, import.meta.url)).text();

describe('responsive layout stylesheet contract', () => {
  test('expands shared page geometry inside responsive gutters', async () => {
    const appStyles = await stylesheet('../../../app.css');

    expect(appStyles).toContain('box-sizing: border-box;');
    expect(appStyles).toContain('--page-gutter: clamp(16px, 5vw, 40px);');
    expect(appStyles).toContain(
      'width: calc(100% - var(--page-gutter) - var(--page-gutter));',
    );
    expect(appStyles).not.toContain('max-width: 1000px;');
    expect(appStyles).not.toContain('.page-content:before');
    expect(appStyles).not.toContain('.page-content:after');
  });

  test('uses flex growth and normal-flow footer spacing for shared and Homepage layouts', async () => {
    const [appStyles, homeStyles] = await Promise.all([
      stylesheet('../../../app.css'),
      stylesheet('../../../pages/styles/homepage.css'),
    ]);

    expect(appStyles).toContain('min-height: 100vh;');
    expect(appStyles).toContain('flex-direction: column;');
    expect(appStyles).toContain('flex: 1;');
    expect(appStyles).toContain('margin-top: auto;');
    expect(appStyles).not.toContain('position: fixed;');
    expect(homeStyles).toContain('.homepage-container {\n  display: flex;');
    expect(homeStyles).toContain('flex: 1;');
    expect(homeStyles).toContain('flex-direction: column;');
  });

  test('keeps navigation and footer controls within narrow viewports', async () => {
    const [navStyles, footerStyles] = await Promise.all([
      stylesheet('../styles/navBar.css'),
      stylesheet('../styles/footer.css'),
    ]);

    expect(navStyles).toContain('width: min(420px, calc(100vw - 32px));');
    expect(navStyles).toContain('flex-wrap: wrap;');
    expect(navStyles).toContain('width: 100%;');
    expect(footerStyles).toContain('flex-wrap: wrap;');
    expect(footerStyles).toContain('margin-left: 0;');
    expect(footerStyles).not.toContain('height: 85px;');
  });

  test('reflows records and project cards without negative margins', async () => {
    const [homeStyles, workStyles, educationStyles, projectStyles] =
      await Promise.all([
        stylesheet('../../../pages/styles/homepage.css'),
        stylesheet('../../homepage/styles/works.css'),
        stylesheet('../../homepage/styles/education.css'),
        stylesheet('../../projects/styles/allProjects.css'),
      ]);

    expect(homeStyles).not.toContain('margin-left: -25px;');
    expect(homeStyles).not.toContain('margin-right: -25px;');
    expect(workStyles).toContain('min-width: 0;');
    expect(workStyles).toContain('overflow-wrap: anywhere;');
    expect(educationStyles).toContain('min-width: 0;');
    expect(educationStyles).toContain('overflow-wrap: anywhere;');
    expect(projectStyles).toContain('display: grid;');
    expect(projectStyles).toContain(
      'grid-template-columns: repeat(auto-fit, minmax(min(100%, 220px), 1fr));',
    );
    expect(projectStyles).not.toContain('margin-left: -35px;');
    expect(projectStyles).not.toContain('margin-right: -35px;');
  });
});
