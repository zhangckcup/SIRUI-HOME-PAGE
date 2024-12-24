// features部分数据，需要删减/新增页面数据直接在featusData中新增/删减数据项即可
// 页面深浅颜色固定 深/浅轮换
// 新增页面数据参考：无subtitle类型：参考楼层一数据结构，subtitle左深右浅类型：参考楼层二数据结构，单色subtitle：参考楼层四数据
// 次出所有数据类型可通过自定义追加class类名覆盖样式，自定义类名需要前往对应组件less文件中新增
// 每层数据字段含义参考对应注释

// 楼层数据
export const featuresData = [
  {
    floorIndex: 1,
    titleConfigPc: [
      {
        text: 'Your Dedicated AI Social Media',
        class: 'common-floor-font pc-bold-size-title common-light-color',
      },
      {
        text: 'Advertising Specialist',
        class: 'common-floor-font pc-bold-size-title common-light-color',
        needIcon: true,
      },
    ],
    titleConfigMobile: [
      {
        text: 'Your Dedicated',
        class: 'common-floor-font mobile-bold-size-title common-light-color',
      },
      {
        text: 'AI Social Media',
        class: 'common-floor-font mobile-bold-size-title common-light-color',
      },
      {
        text: 'Advertising Specialist',
        class: 'common-floor-font mobile-bold-size-title common-light-color',
        needIcon: false,
      },
    ],
    needMobileIcon: true,
    useComponents: false,
  }, // 楼层一数据
  {
    floorIndex: 2, // 楼层序列
    titleConfigPc: [
      {
        text: 'Product Benefits', // 标题文案
        class:
          'common-floor-font pc-bold-size-title common-dark-color pc-second-floor', // 标题文案对应类名
      },
    ],
    titleConfigMobile: [
      {
        text: 'Product Benefits', // 标题文案
        class:
          'common-floor-font mobile-bold-size-title common-dark-color mobile-second-floor', // 标题文案对应类名
      },
    ],
    useComponents: true, // 副标题是否使用左边颜色浅色组件
    subTitleConfigPc: [
      {
        subTitle: 'AI for Perfect Meta Ads', // 副标题左侧文案
        class: 'common-floor-font pc-dark-sub ', // 副标题类名
      },
      {
        subTitle: 'Maximize Reach with AI',
        class: 'common-floor-font pc-dark-sub ',
      },
      {
        subTitle: 'AI Optimizes Ads Automatically',
        class: 'common-floor-font pc-dark-sub ',
      },
    ],
    subTitleConfigMobile: [
      {
        subTitle: 'AI for Perfect Meta Ads', // 副标题左侧文案
        class: 'common-floor-font mobile-dark-sub ', // 副标题类名
      },
      {
        subTitle: 'Maximize Reach with AI',
        class: 'common-floor-font mobile-dark-sub ',
      },
      {
        subTitle: 'AI Optimizes Ads Automatically',
        class: 'common-floor-font mobile-dark-sub ',
      },
    ],
    btnStyle: {
      buttonType: 'more', // 按钮类型: "more"、"tryFree"
      isDeepStyle: true, // 按钮是否是深色调
      className:
        'common-floor-font pc-more pc-second-btn mobile-more mobile-second-btn', // 按钮类名
      btnHref: '/more/2/light', // 跳转至more页面必要参数/index/pageStyle, index => 从这里取第index个数据。 pageStyle => light: 页面背景白色, deep: 页面背景深色
      arrowStyle: 'tryFree', // 按钮箭头类型: home、tryFree
    },
  }, // 楼层二数据
  {
    floorIndex: 3,
    titleConfigPc: [
      {
        text: 'Why Our AI Works',
        class:
          'common-floor-font pc-bold-size-title common-light-color pc-third-floor',
      },
    ],
    titleConfigMobile: [
      {
        text: 'Why Our AI Works',
        class:
          'common-floor-font mobile-bold-size-title common-light-color mobile-third-floor',
      },
    ],
    subTitleConfigPc: [
      {
        subTitle: 'AI Secures Your Meta Ads',
        class: 'common-floor-font pc-light-sub common-light-color',
      },
      {
        subTitle: 'Global Reach with Local Compliance',
        class: 'common-floor-font pc-light-sub common-light-color',
      },
      {
        subTitle: 'Industry-Leading Knowledge Base',
        class: 'common-floor-font pc-light-sub common-light-color',
      },
    ],
    subTitleConfigMobile: [
      {
        subTitle: 'AI Secures Your Meta Ads',
        class: 'common-floor-font mobile-light-sub common-light-color',
      },
      {
        subTitle: 'Global Reach with Local Compliance',
        class: 'common-floor-font mobile-light-sub common-light-color',
      },
      {
        subTitle: 'Industry-Leading Knowledge Base',
        class: 'common-floor-font mobile-light-sub common-light-color',
      },
    ],
    useComponents: true,
    btnStyle: {
      buttonType: 'more',
      isDeepStyle: false,
      className:
        'common-floor-font pc-more pc-third-btn mobile-more mobile-third-btn',
      btnHref: '/more/3/deep',
      arrowStyle: 'tryFree', // 按钮箭头类型: home、tryFree
    },
  }, // 楼层三数据
  {
    floorIndex: 4, // 楼层序列
    titleConfigPc: [
      {
        text: 'How It Works', // 标题文案
        class:
          'common-floor-font pc-bold-size-title common-dark-color pc-second-floor', // 标题文案对应类名
      },
    ],
    titleConfigMobile: [
      {
        text: 'How It Works', // 标题文案
        class:
          'common-floor-font mobile-bold-size-title common-dark-color Mobile-second-floor', // 标题文案对应类名
      },
    ],
    useComponents: true, // 副标题是否使用左边颜色浅色组件
    subTitleConfigPc: [
      {
        subTitle: 'AI-Powered Ad Creation', // 副标题左侧文案
        class: 'common-floor-font pc-dark-sub ', // 副标题类名
      },
      {
        subTitle: 'Precise Audience Targeting',
        class: 'common-floor-font pc-dark-sub ',
      },
      {
        subTitle: 'Easy Global Compliance',
        class: 'common-floor-font pc-dark-sub ',
      },
    ],
    subTitleConfigMobile: [
      {
        subTitle: 'AI-Powered Ad Creation', // 副标题左侧文案
        class: 'common-floor-font mobile-dark-sub ', // 副标题类名
      },
      {
        subTitle: 'Precise Audience Targeting',
        class: 'common-floor-font mobile-dark-sub ',
      },
      {
        subTitle: 'Easy Global Compliance',
        class: 'common-floor-font mobile-dark-sub ',
      },
    ],
    btnStyle: {
      buttonType: 'more', // 按钮类型: "more"、"tryFree"
      isDeepStyle: true, // 按钮是否是深色调
      className:
        'common-floor-font pc-more pc-second-btn mobile-more mobilec-second-btn', // 按钮类名
      btnHref: '/more/4/light', // 跳转至more页面必要参数/index/pageStyle, index => 从这里取第index个数据。 pageStyle => light: 页面背景白色, deep: 页面背景深色
      arrowStyle: 'tryFree', // 按钮箭头类型: home、tryFree
    },
  }, // 楼层四数据
  {
    floorIndex: 5,
    titleConfigPc: [
      // 标题部分数据，一行一条对象，类名支持自定义。
      {
        text: 'Why Choose Us',
        class:
          'common-floor-font pc-bold-size-title common-light-color pc-forth-floor',
      },
    ],
    titleConfigMobile: [
      // 标题部分数据，一行一条对象，类名支持自定义。
      {
        text: 'Why Choose Us',
        class:
          'common-floor-font mobile-bold-size-title common-light-color mobile-forth-floor',
      },
    ],
    subTitleConfigPc: [
      // 副标题数据，每行分别一条数据， 类名支持自定义。可通过删减控制副标题行数
      {
        text: 'Standing out on Meta isn’t easy, especially with everyone vying for attention.',
        class:
          'common-floor-font pc-floor-subtitle-text common-dark-opacity-color pc-need-full-word',
      },
      {
        text: 'But what if your ads stood out for the right reasons? Our AI uses real-time',
        class:
          'common-floor-font pc-floor-subtitle-text common-dark-opacity-color pc-need-full-word',
      },
      {
        text: 'data to target the perfect audience, ensuring your ads land at the right time, in',
        class:
          'common-floor-font pc-floor-subtitle-text common-dark-opacity-color pc-need-full-word',
      },
      {
        text: 'the right feed. Whether on Facebook, Instagram, or Messenger, our AI',
        class:
          'common-floor-font pc-floor-subtitle-text common-dark-opacity-color pc-need-full-word',
      },
      {
        text: 'optimizes your ads, turning likes and comments into real customers.',
        class:
          'common-floor-font pc-floor-subtitle-text common-dark-opacity-color',
      },
    ],
    subTitleConfigMobile: [
      // 副标题数据，每行分别一条数据， 类名支持自定义。可通过删减控制副标题行数
      {
        text: 'Meet Sarah. She runs a personal fashion',
        class:
          'common-floor-font mobile-floor-subtitle-text common-dark-opacity-color mobile-need-full-word',
      },
      {
        text: 'brand and once considered hiring someone',
        class:
          'common-floor-font mobile-floor-subtitle-text common-dark-opacity-color mobile-need-full-word',
      },
      {
        text: 'to manage her Meta ads. But after weighing',
        class:
          'common-floor-font mobile-floor-subtitle-text common-dark-opacity-color mobile-need-full-word',
      },
      {
        text: 'the risks—high costs and the potential for',
        class:
          'common-floor-font mobile-floor-subtitle-text common-dark-opacity-color mobile-need-full-word',
      },
      {
        text: 'human error—she turned to our AI. Now, AI',
        class:
          'common-floor-font mobile-floor-subtitle-text common-dark-opacity-color mobile-need-full-word',
      },
      {
        text: 'monitors her ads 24/7, ensuring compliance',
        class:
          'common-floor-font mobile-floor-subtitle-text common-dark-opacity-color mobile-need-full-word',
      },
      {
        text: 'and optimizing performance. It’s efficient,',
        class:
          'common-floor-font mobile-floor-subtitle-text common-dark-opacity-color mobile-need-full-word',
      },
      {
        text: 'precise, and error-free. Sarah can now relax,',
        class:
          'common-floor-font mobile-floor-subtitle-text common-dark-opacity-color mobile-need-full-word',
      },
      {
        text: 'knowing her ads are in good hands.',
        class:
          'common-floor-font mobile-floor-subtitle-text common-dark-opacity-color',
      },
    ],
    useComponents: false, // 是否使用左深右浅模式的副标题
    btnStyle: {
      // 按钮数据:
      buttonType: 'tryFree', //支持两种类型 tryFree: 图片按钮tryFree, more: 文字按钮。 需要更改: 前往components/Button/index
      isDeepStyle: true, // 控制按钮颜色是深色类型还是浅色类型
      className:
        'pc-floor-forth-btn pc-tryFreeLightBtn mobile-floor-fifth-btn mobile-tryFreeLightBtn', // 按钮类名，可自定义，需要更改: 前往components/Button/index.less
      btnHref: 'https://test.sandwichlab.ai/lexi', // 按钮动作，可自定义配置
      arrowStyle: 'tryFree', // 按钮箭头类型: home、tryFree
    },
  }, // 楼层五数据
];

// 底部栏数据
export const featuresBottomData = {
  left: {
    titleIcon: {
      src: require('$public/logo_deep.png'),
      class: 'pc-sanwich-icon mobile-sanwich-icon',
      href: '/',
    },
    items: [
      {
        srcPc: require('$public/Facebook.png'),
        srcMobile: require('$public/titleFacebook.png'),
        class: 'pc-facebook-icon mobile-facebook-icon',
        href: 'https://www.facebook.com/profile.php?id=61562781021800',
      },
      {
        srcPc: require('$public/Instagram.png'),
        srcMobile: require('$public/titleIg.png'),
        class: 'pc-instagram-icon mobile-instagram-icon',
        href: 'https://www.instagram.com/sandwich_lab_ai/',
      },
    ],
  },
  right: [
    {
      title: 'Product',
      items: [
        {
          text: 'Features',
          href: '/Features',
          onClick: () => {
            window.scrollTo(0, 0);
          },
          target: '_self',
        },
      ],
    },
    {
      title: 'Company',
      items: [
        {
          text: 'Contact us',
          href: '/ContactUs',
          target: '_self',
        },
        {
          text: 'Join us',
          href: 'https://app.mokahr.com/social-recruitment/sandwichlab/140350#/jobs',
          target: '_blank',
        },
      ],
    },
  ],
  bottom: {
    font: [
      {
        text: 'Copyright © 2024 Sandwich Lab AI HK Limited',
      },
      {
        text: 'All Rights Reserved',
      },
    ],
    behind: [
      {
        text: 'Terms and Conditions',
        href: 'https://docs.google.com/document/d/1ijvU6W5dnMA2TzDDbgoFEFK4PbRr3XKRQAxvsdizMdU/edit?tab=t.0#heading=h.eltb2s7v151n',
      },
      {
        text: 'Privacy Policy',
        href: 'https://docs.google.com/document/d/1ijvU6W5dnMA2TzDDbgoFEFK4PbRr3XKRQAxvsdizMdU/edit?tab=t.0#heading=h.eltb2s7v151n',
      },
    ],
  },
};
