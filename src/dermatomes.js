// window.addEventListener('DOMContentLoaded', () => {
  const objects = {
    male: {
      labels: true,
      lines: true,
      colors: true,
      skinType: 'none',
    },
    female: {
      labels: true,
      lines: true,
      colors: true,
      skinType: 'none',
    },
  };
  const noColors = `
    --color12: #00000000;
    --color13: #00000000;
    --color14: #00000000;
    --color15: #00000000;
    --color16: #00000000;
    --color17: #00000000;
    --color18: #00000000;
    --color19: #00000000;
    --color20: #00000000;
    --color21: #00000000;
    --color22: #00000000;
    --color23: #00000000;
    --color24: #00000000;
    --color25: #00000000;
    --color26: #00000000;
    --color27: #00000000;
    --color28: #00000000;
    --color29: #00000000;
    --color30: #00000000;
    --color31: #00000000;
    --color32: #00000000;
    --color33: #00000000;
    --color34: #00000000;
    --color35: #00000000;
    --color36: #00000000;
    --color37: #00000000;
    --color38: #00000000;
    --color39: #00000000;
    --color40: #00000000;
    --color41: #00000000;
    --color42: #00000000;
    --color43: #00000000;
    --color44: #00000000;
    --color45: #00000000;
    --color46: #00000000;
    --color47: #00000000;
    --color48: #00000000;
    --color49: #00000000;
    --color50: #00000000;
    --color51: #00000000;
    --color52: #00000000;
    --color53: #00000000;
    --color54: #00000000;
    --color55: #00000000;`;
  const colors = `
    --color12: #e89cb6;
    --color13: #c8ea91;
    --color14: #c8ea9b;
    --color15: #c7e9a0;
    --color16: #c6eba7;
    --color17: #c5ebae;
    --color18: #c1ebb5;
    --color19: #bdebbe;
    --color20: #b8ebc5;
    --color21: #b2ebcc;
    --color22: #abecd6;
    --color23: #a4ebdd;
    --color24: #9ceae3;
    --color25: #bfb6e8;
    --color26: #bac1e3;
    --color27: #e8b5be;
    --color28: #b6c9de;
    --color29: #f0b1bc;
    --color30: #e89ca6;
    --color31: #e6adbf;
    --color32: #e5e956;
    --color33: #c3d173;
    --color34: #e8e1a2;
    --color35: #dbe999;
    --color36: #99dbe9;
    --color37: #99c8e9;
    --color38: #99b5e9;
    --color39: #99a3e9;
    --color40: #b5e8cc;
    --color41: #9086fa;
    --color42: #7a6ef8;
    --color43: #e598c1;
    --color44: #d3a2cf;
    --color45: #a79cd9;
    --color46: #b98e81;
    --color47: #d39d73;
    --color48: #b58066;
    --color49: #bc8f82;
    --color50: #e19fbf;
    --color51: #e1afbf;
    --color52: #e38db5;
    --color53: #d2a6b0;
    --color54: #bee895;
    --color55: #c6a2de;
  `;
  const skinTypes = {
    none: `
      /* eyebrows */
      --color1: #616161;
      /* head contour */
      --color2: #a5a5a5;
      --color3: #919191;
      --color4: #757575;
      /* shades */
      --color5: #8d8d8d80;
      --color7: #c6c6c680;
      --color10: #76767680;
      /* fingernails */
      --color6: #dcdcdc;
      /* nipples */
      --color8: #787878;
      --color9: #666666;
      /* lines */
      --color11: #c0c0c0;
    `,
    light: `
      /* eyebrows */
      --color1: #8d5337;
      /* head contour */
      --color2: #cb9889;
      --color3: #ad877c;
      --color4: #916c61;
      /* shades */
      --color5: #bd805180;
      --color7: #e0c1a180;
      --color10: #ac654380;
      /* fingernails */
      --color6: #e4dbce;
      /* nipples */
      --color8: #a46b4a;
      --color9: #a2571b;
      /* lines */
      --color11: #ddaa82;`,
    medium: `
      /* eyebrows */
      --color1: #3b2a14;
      /* head contour */
      --color2: #c58c65;
      --color3: #9e664d;
      --color4: #754c36;
      /* shades */
      --color5: #9e593480;
      --color7: #dd986680;
      --color10: #7d431f80;
      /* fingernails */
      --color6: #d7b49e;
      /* nipples */
      --color8: #73351f;
      --color9: #521e12;
      /* lines */
      --color11: #b37344;`,
    dark: `
      /* eyebrows */
      --color1: #2b1a0e;
      /* head contour */
      --color2: #88564b;
      --color3: #6c4438;
      --color4: #52342b;
      /* shades */
      --color5: #6c3a2480;
      --color7: #a3745e80;
      --color10: #522b1880;
      /* fingernails */
      --color6: #c19a75;
      /* nipples */
      --color8: #4a2716;
      --color9: #331a0f;
      /* lines */
      --color11: #7d4f3b;`,
  };

  const createStyle = (id, content) => {
    const style = document.createElementNS(
      'http://www.w3.org/2000/svg',
      'style'
    );
    style.id = id;
    style.textContent = content;
    return style;
  };
  const update = (id) => (ev) => {
    const svg = ev.target;
    // compare parent id to id
    if (svg.parentElement.id !== id) return;
    const svgDoc = svg.contentWindow.document;
    const svgEl = svgDoc.querySelector('svg');

    let content;
    if (!svgDoc.querySelector('#static-style')) {
      content = `
        body {
          margin: 0;
          padding: 0;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
        }
    `;
      const bodyStyle = createStyle('static-style', content);
      svgEl.appendChild(bodyStyle);
    }
    let dynStyle = svgDoc.querySelector('#dyn-style');
    content = `
      :root {
        --label-color: #444;
      }
      @media (prefers-color-scheme: dark) {
        :root {
          --label-color: #777;
        }
      }
      #front-labels, #back-labels {
        display: ${objects[id].labels ? 'block' : 'none'};
      }
      #front-lines, #back-lines {
        display: ${objects[id].lines ? 'block' : 'none'};
      }
      `;
    if (!dynStyle) {
      dynStyle = createStyle('dyn-style', content);
      svgEl.appendChild(dynStyle);
    } else {
      dynStyle.textContent = content;
    }

    // set colors
    if (objects[id].colors) {
      dynStyle.textContent += `
        :root {
          ${colors}
        }
      `;
    } else {
      dynStyle.textContent += `
        :root {
          ${noColors}
        }
      `;
    }
    // set skin type
    dynStyle.textContent += `
        :root {
          ${skinTypes[objects[id].skinType]}
        }
      `;
  };
  // inject style into svg object
  const wrappers = document.querySelectorAll('.wrapper');
  wrappers.forEach((wrapper) => {
    const id = wrapper.id;
    const svg = wrapper.querySelector('object');
    const svgDoc = svg.contentWindow.document;
    const svgEl = svgDoc.querySelector('html');
    const style = createStyle('static-style', '');
    svgEl.appendChild(style);
    svg.addEventListener('load', update(id));
    // window.addEventListener('resize', update(id));

    const labelsCB = wrapper.querySelector('[name=labels]');
    labelsCB.addEventListener('change', (event) => {
      objects[id].labels = event.target.checked;
      update(id)({ target: svg });
    });

    const linesCB = wrapper.querySelector('[name=lines]');
    linesCB.addEventListener('change', (event) => {
      objects[id].lines = event.target.checked;
      update(id)({ target: svg });
    });

    const colorsCB = wrapper.querySelector('[name=colors]');
    colorsCB.addEventListener('change', (event) => {
      objects[id].colors = event.target.checked;
      update(id)({ target: svg });
    });

    const skinTypeSelect = wrapper.querySelector('[name=skin-type]');
    skinTypeSelect.addEventListener('change', (event) => {
      objects[id].skinType = event.target.value;
      update(id)({ target: svg });
    });
  });
  // on content scroll
  let barTimeout;
  const content = document.querySelector('.content');
  content.addEventListener('scroll', (event) => {
    if (barTimeout) {
      clearTimeout(barTimeout); //clear to reset
    }
    barTimeout = setTimeout(() => {
      content.classList.remove('scrolling');
    }, 500);
    content.classList.add('scrolling');
  });
// });
