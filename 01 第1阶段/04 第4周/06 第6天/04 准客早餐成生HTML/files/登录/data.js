﻿$axure.loadCurrentPage({
  "url":"登录.html",
  "generationDate":new Date(1458979235638.15),
  "isCanvasEnabled":false,
  "variables":["OnLoadVariable"],
  "page":{
    "packageId":"b7396fe2bace438fa36b1669a56ab6b6",
    "type":"Axure:Page",
    "name":"登录",
    "notes":{
      "默认":"<p><span>wefsdadsfdfg</span></p>"},
    "style":{
      "baseStyle":"627587b6038d43cca051c114ac41ad32",
      "pageAlignment":"near",
      "fill":{
        "fillType":"solid",
        "color":0xFFFFFFFF},
      "image":null,
      "imageHorizontalAlignment":"near",
      "imageVerticalAlignment":"near",
      "imageRepeat":"auto",
      "favicon":null,
      "sketchFactor":"0",
      "colorStyle":"appliedColor",
      "fontName":"应用字体",
      "borderWidth":"0"},
    "adaptiveStyles":{
},
    "interactionMap":{
},
    "diagram":{
      "objects":[{
          "id":"cc4d0a4eff764339bb409925f1bbf0e5",
          "label":"",
          "type":"referenceDiagramObject",
          "styleType":"referenceDiagramObject",
          "visible":true,
          "style":{
},
          "adaptiveStyles":{
},
          "masterId":"23adafa7539c44caae711628187c4222"},
{
          "id":"dffc55f1b8744da8b91cd2ca54bc12e4",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "location":{
              "x":160,
              "y":130},
            "size":{
              "width":140,
              "height":140}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"e6f6f84835cb41f79bc1653f8058eb10",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":160,
                  "y":130},
                "size":{
                  "width":140,
                  "height":140}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/登录/u3.png"}},
{
          "id":"4de6abd09c5b4d42a643dffd1a04d93e",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "horizontalAlignment":"left",
            "location":{
              "x":80,
              "y":357},
            "size":{
              "width":300,
              "height":40}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"6c86dbd86fe84d31ae4dcaa805570082",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "horizontalAlignment":"left",
                "location":{
                  "x":80,
                  "y":357},
                "size":{
                  "width":300,
                  "height":40}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/登录/u5.png"}},
{
          "id":"136a986939ff44e3af8809a1cdfebed6",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "horizontalAlignment":"left",
            "location":{
              "x":80,
              "y":407},
            "size":{
              "width":300,
              "height":40}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"d33a2d0ba8c24cb99ec8c5db10ef5fb6",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "horizontalAlignment":"left",
                "location":{
                  "x":80,
                  "y":407},
                "size":{
                  "width":300,
                  "height":40}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"images/登录/u5.png"}},
{
          "id":"d79a375b1eaa4d5cbced4cd238982d4f",
          "label":"",
          "type":"buttonShape",
          "styleType":"buttonShape",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "location":{
              "x":80,
              "y":457},
            "size":{
              "width":300,
              "height":40}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"5b6e91d77f374a55a0b854cb4ca61917",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "location":{
                  "x":80,
                  "y":457},
                "size":{
                  "width":300,
                  "height":40}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"登录成功",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 首页",
                      "target":{
                        "targetType":"page",
                        "url":"首页.html",
                        "includeVariables":true},
                      "linkType":"current"}]},
{
                  "description":"密码错误",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"setPanelState",
                      "description":"设置 密码错误 to 状态1 淡入淡出 out 500ms 淡入淡出 in 500ms",
                      "panelsToStates":[{
                          "panelPath":["386848a4bc3b445aa03c1a7bc2c7a302"],
                          "stateInfo":{
                            "setStateType":"diagram",
                            "stateNumber":2,
                            "stateValue":{
                              "exprType":"stringLiteral",
                              "value":"1",
                              "stos":[]},
                            "loop":false,
                            "showWhenSet":false,
                            "options":{
                              "animateOut":{
                                "easing":"fade",
                                "duration":500},
                              "animateIn":{
                                "easing":"fade",
                                "duration":500},
                              "compress":false}}}]}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"images/登录/u5.png"}},
{
          "id":"3c28a82b10d9487287f731c3438bc917",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":196,
              "y":522},
            "size":{
              "width":68,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"0bc7b7beff9e4a3996ad43be847af332",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":196,
                  "y":522},
                "size":{
                  "width":68,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"4cdda2baa146432bb1ffdace84d542b8",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "fontSize":"16px",
            "location":{
              "x":190,
              "y":635},
            "size":{
              "width":81,
              "height":19}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"071f900ca1f740a5b392cdbed1db7432",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "fontSize":"16px",
                "location":{
                  "x":190,
                  "y":635},
                "size":{
                  "width":81,
                  "height":19}},
              "adaptiveStyles":{
}}],
          "interactionMap":{
            "onClick":{
              "description":"OnClick",
              "cases":[{
                  "description":"用例 1",
                  "isNewIfGroup":false,
                  "actions":[{
                      "action":"linkWindow",
                      "description":"在 当前窗口 打开 注册",
                      "target":{
                        "targetType":"page",
                        "url":"注册.html",
                        "includeVariables":true},
                      "linkType":"current"}]}]}},
          "tabbable":true,
          "images":{
            "normal~":"resources/images/transparent.gif"}},
{
          "id":"386848a4bc3b445aa03c1a7bc2c7a302",
          "label":"密码错误",
          "type":"dynamicPanel",
          "styleType":"dynamicPanel",
          "visible":true,
          "style":{
            "location":{
              "x":70,
              "y":298},
            "size":{
              "width":10,
              "height":10}},
          "adaptiveStyles":{
},
          "scrollbars":"none",
          "fitToContent":true,
          "propagate":false,
          "diagrams":[{
              "id":"8a2ca4e1316d4dbca7c1d0fbdaadf2d0",
              "label":"无",
              "type":"Axure:PanelDiagram",
              "objects":[]},
{
              "id":"6032a30d5d4a44c88988b107dd48aae0",
              "label":"状态1",
              "type":"Axure:PanelDiagram",
              "objects":[{
                  "id":"1ba2bff40ed847888ecd638285cb5c32",
                  "label":"",
                  "parentDynamicPanel":"386848a4bc3b445aa03c1a7bc2c7a302",
                  "type":"buttonShape",
                  "styleType":"buttonShape",
                  "visible":true,
                  "style":{
                    "size":{
                      "width":320,
                      "height":160},
                    "cornerRadiusTopLeft":"10"},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"0c6357519eb448f481c89295a5d3ab6e",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"386848a4bc3b445aa03c1a7bc2c7a302",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "size":{
                          "width":320,
                          "height":160},
                        "cornerRadiusTopLeft":"10"},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"images/登录/u16.png"}},
{
                  "id":"009f232460bd438ead5cad352ab00a7e",
                  "label":"",
                  "parentDynamicPanel":"386848a4bc3b445aa03c1a7bc2c7a302",
                  "type":"horizontalLine",
                  "styleType":"horizontalLine",
                  "visible":true,
                  "style":{
                    "location":{
                      "x":0,
                      "y":104},
                    "size":{
                      "width":320,
                      "height":10}},
                  "adaptiveStyles":{
},
                  "images":{
                    "start~":"resources/images/transparent.gif",
                    "end~":"resources/images/transparent.gif",
                    "line~":"images/登录/u18_line.png"}},
{
                  "id":"15d94dd9d70049f28d77bafe9ff26fa4",
                  "label":"",
                  "parentDynamicPanel":"386848a4bc3b445aa03c1a7bc2c7a302",
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "fontSize":"16px",
                    "horizontalAlignment":"center",
                    "lineSpacing":"28px",
                    "location":{
                      "x":14,
                      "y":30},
                    "size":{
                      "width":290,
                      "height":56}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"922ee5c6c4fa4d069d09b5f757ea6ac2",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"386848a4bc3b445aa03c1a7bc2c7a302",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fontSize":"16px",
                        "horizontalAlignment":"center",
                        "lineSpacing":"28px",
                        "location":{
                          "x":14,
                          "y":30},
                        "size":{
                          "width":290,
                          "height":56}},
                      "adaptiveStyles":{
}}],
                  "images":{
                    "normal~":"resources/images/transparent.gif"}},
{
                  "id":"395a953d8a2a45babe5dae1e8a7a077e",
                  "label":"",
                  "parentDynamicPanel":"386848a4bc3b445aa03c1a7bc2c7a302",
                  "type":"buttonShape",
                  "styleType":"paragraph",
                  "visible":true,
                  "style":{
                    "fontSize":"18px",
                    "location":{
                      "x":141,
                      "y":124},
                    "size":{
                      "width":37,
                      "height":22}},
                  "adaptiveStyles":{
},
                  "objects":[{
                      "id":"06d9b2f907d841c095d6a1a5f2bf8624",
                      "label":"",
                      "isContained":true,
                      "parentDynamicPanel":"386848a4bc3b445aa03c1a7bc2c7a302",
                      "type":"richTextPanel",
                      "styleType":"paragraph",
                      "visible":true,
                      "style":{
                        "fontSize":"18px",
                        "location":{
                          "x":141,
                          "y":124},
                        "size":{
                          "width":37,
                          "height":22}},
                      "adaptiveStyles":{
}}],
                  "interactionMap":{
                    "onClick":{
                      "description":"OnClick",
                      "cases":[{
                          "description":"用例 1",
                          "isNewIfGroup":false,
                          "actions":[{
                              "action":"setPanelState",
                              "description":"设置 密码错误 to 无 淡入淡出 out 500ms 淡入淡出 in 500ms",
                              "panelsToStates":[{
                                  "panelPath":["386848a4bc3b445aa03c1a7bc2c7a302"],
                                  "stateInfo":{
                                    "setStateType":"diagram",
                                    "stateNumber":1,
                                    "stateValue":{
                                      "exprType":"stringLiteral",
                                      "value":"1",
                                      "stos":[]},
                                    "loop":false,
                                    "showWhenSet":false,
                                    "options":{
                                      "animateOut":{
                                        "easing":"fade",
                                        "duration":500},
                                      "animateIn":{
                                        "easing":"fade",
                                        "duration":500},
                                      "compress":false}}}]}]}]}},
                  "tabbable":true,
                  "images":{
                    "normal~":"resources/images/transparent.gif"}}]}]},
{
          "id":"223bc75e27e849bca03e50c93a5fb0d4",
          "label":"",
          "type":"buttonShape",
          "styleType":"paragraph",
          "visible":true,
          "style":{
            "location":{
              "x":560,
              "y":474},
            "size":{
              "width":88,
              "height":16}},
          "adaptiveStyles":{
},
          "objects":[{
              "id":"7d64d832e22847c9af09e4c2d22d7a45",
              "label":"",
              "isContained":true,
              "type":"richTextPanel",
              "styleType":"paragraph",
              "visible":true,
              "style":{
                "location":{
                  "x":560,
                  "y":474},
                "size":{
                  "width":88,
                  "height":16}},
              "adaptiveStyles":{
}}],
          "images":{
            "normal~":"resources/images/transparent.gif"}}]}},
  "masters":{
    "23adafa7539c44caae711628187c4222":{
      "packageId":"23adafa7539c44caae711628187c4222",
      "type":"Axure:Master",
      "name":"基础框架",
      "notes":{
},
      "style":{
        "baseStyle":"627587b6038d43cca051c114ac41ad32",
        "pageAlignment":"near",
        "fill":{
          "fillType":"solid",
          "color":0xFFFFFFFF},
        "image":null,
        "imageHorizontalAlignment":"near",
        "imageVerticalAlignment":"near",
        "imageRepeat":"auto",
        "favicon":null,
        "sketchFactor":"0",
        "colorStyle":"appliedColor",
        "fontName":"应用字体",
        "borderWidth":"0"},
      "adaptiveStyles":{
},
      "interactionMap":{
},
      "diagram":{
        "objects":[{
            "id":"7112620aabdc4d5b91ebe669c2b6edc4",
            "label":"",
            "type":"buttonShape",
            "styleType":"buttonShape",
            "visible":true,
            "style":{
              "location":{
                "x":50,
                "y":50},
              "size":{
                "width":360,
                "height":640}},
            "adaptiveStyles":{
},
            "objects":[{
                "id":"eb751f4e34bf4004898e31fa475069f4",
                "label":"",
                "isContained":true,
                "type":"richTextPanel",
                "styleType":"paragraph",
                "visible":true,
                "style":{
                  "location":{
                    "x":50,
                    "y":50},
                  "size":{
                    "width":360,
                    "height":640}},
                "adaptiveStyles":{
}}],
            "images":{
              "normal~":"images/首页/u1.png"}}]}}},
  "objectPaths":{
    "cc4d0a4eff764339bb409925f1bbf0e5":{
      "scriptId":"u0",
      "7112620aabdc4d5b91ebe669c2b6edc4":{
        "scriptId":"u1"},
      "eb751f4e34bf4004898e31fa475069f4":{
        "scriptId":"u2"}},
    "dffc55f1b8744da8b91cd2ca54bc12e4":{
      "scriptId":"u3"},
    "e6f6f84835cb41f79bc1653f8058eb10":{
      "scriptId":"u4"},
    "4de6abd09c5b4d42a643dffd1a04d93e":{
      "scriptId":"u5"},
    "6c86dbd86fe84d31ae4dcaa805570082":{
      "scriptId":"u6"},
    "136a986939ff44e3af8809a1cdfebed6":{
      "scriptId":"u7"},
    "d33a2d0ba8c24cb99ec8c5db10ef5fb6":{
      "scriptId":"u8"},
    "d79a375b1eaa4d5cbced4cd238982d4f":{
      "scriptId":"u9"},
    "5b6e91d77f374a55a0b854cb4ca61917":{
      "scriptId":"u10"},
    "3c28a82b10d9487287f731c3438bc917":{
      "scriptId":"u11"},
    "0bc7b7beff9e4a3996ad43be847af332":{
      "scriptId":"u12"},
    "4cdda2baa146432bb1ffdace84d542b8":{
      "scriptId":"u13"},
    "071f900ca1f740a5b392cdbed1db7432":{
      "scriptId":"u14"},
    "386848a4bc3b445aa03c1a7bc2c7a302":{
      "scriptId":"u15"},
    "1ba2bff40ed847888ecd638285cb5c32":{
      "scriptId":"u16"},
    "0c6357519eb448f481c89295a5d3ab6e":{
      "scriptId":"u17"},
    "009f232460bd438ead5cad352ab00a7e":{
      "scriptId":"u18"},
    "15d94dd9d70049f28d77bafe9ff26fa4":{
      "scriptId":"u19"},
    "922ee5c6c4fa4d069d09b5f757ea6ac2":{
      "scriptId":"u20"},
    "395a953d8a2a45babe5dae1e8a7a077e":{
      "scriptId":"u21"},
    "06d9b2f907d841c095d6a1a5f2bf8624":{
      "scriptId":"u22"},
    "223bc75e27e849bca03e50c93a5fb0d4":{
      "scriptId":"u23"},
    "7d64d832e22847c9af09e4c2d22d7a45":{
      "scriptId":"u24"}}});