import {
    Packer,
    Document,
    Paragraph,
    TextRun,
    AlignmentType,
    HeadingLevel,
    UnderlineType,
    ImageRun,
    Table,
    TableCell,
    TableRow,
    VerticalAlign,
    WidthType,
    PageOrientation,
    PageBreak
  } from 'docx';

export const table2_2 = (data: any) => {
    console.log('echartsData2', data);
    
    const ndata = [...data]
    let newTable: any = []
    ndata.forEach(i0 => {
      for (let index = 0; index < i0.data.details.length; index++) {
        // 公司名
        const title = [
          new TableCell({
            children: [
              new Paragraph({
                text: `${i0.name}`,
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })
            ],
            rowSpan: i0.data.details.length + 1, //列合并
            verticalAlign: VerticalAlign.CENTER, // 垂直居中
            shading: { fill: 'D3EBF7' },
          })
        ]
        // 煤种名字
        const secondName = [
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].coalName}`,
              style: 'table2bold',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          })
        ]
        // 合计名字
        const lastName = [
          new TableCell({
            children: [new Paragraph({
              text: `合计`,
              style: 'table2bold',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })],
            shading: { fill: '#FF9966' },
          })
        ]
        const lastCells = [
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.total}`,
              style: 'table2blue',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.passRate}`,
              style: 'table2green',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }), new TableCell({
            children: [new Paragraph({
              text: `-`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
        ]
  
        const cells = [
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].total}`,
              style: 'table2blue',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].passRate}`,
              style: 'table2green',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].Mt_wgt_val}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].Ad_wgt_val}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].Ad_pass_rate}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].Vdaf_wgt_val}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].Vdaf_pass_rate}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].Std_wgt_val}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].Std_pass_rate}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].g_wgt_val}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].g_pass_rate}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].y_wgt_val}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
          new TableCell({
            children: [new Paragraph({
              text: `${i0.data.details[index].y_pass_rate}`,
              style: 'table2',
              alignment: AlignmentType.CENTER,
              spacing: { before: 100, after: 100 },
            })]
          }),
        ]
  
        if (index == 0) {
          newTable.push(new TableRow({ children: title.concat(secondName.concat(cells)) }))
        }
        else if (index == i0.data.details.length -1) {
          newTable.push(new TableRow({ children: secondName.concat(cells) }))
          newTable.push(new TableRow({ children: lastName.concat(lastCells) }))
        }
        else {
          newTable.push(new TableRow({ children: secondName.concat(cells) }))
        }
      }
    });
  
    return new Table({
      alignment: AlignmentType.CENTER,
      rows: [
        new TableRow({
          children: [
            new TableCell({
              children: [
                new Paragraph({
                  text: '单位',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                })
              ],
              rowSpan: 2, //列合并
              verticalAlign: VerticalAlign.CENTER, // 垂直居中
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: '煤种',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                })
              ],
              rowSpan: 2, //列合并
              verticalAlign: VerticalAlign.CENTER, // 垂直居中
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: '数量(吨)',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              rowSpan: 2,
              verticalAlign: VerticalAlign.CENTER,
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: '总合格率(%)',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              rowSpan: 2,
              verticalAlign: VerticalAlign.CENTER,
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: '全水Mt(%)',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              rowSpan: 2,
              verticalAlign: VerticalAlign.CENTER,
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: '灰分(Ad)',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              columnSpan: 2, // 行合并
              verticalAlign: VerticalAlign.CENTER,
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: '挥发分(Vdaf)',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              columnSpan: 2,
              verticalAlign: VerticalAlign.CENTER,
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: '硫分(St,d)',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              columnSpan: 2,
              verticalAlign: VerticalAlign.CENTER,
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: '粘结指数(GR.I)',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              columnSpan: 2,
              verticalAlign: VerticalAlign.CENTER,
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [
                new Paragraph({
                  text: '胶质层厚度(Y)',
                  style: 'table2HeaderStyle',
                  alignment: AlignmentType.CENTER,
                  spacing: { before: 100, after: 100 },
                }),
              ],
              columnSpan: 2,
              verticalAlign: VerticalAlign.CENTER,
              shading: { fill: '203764' },
            }),
          ],
          cantSplit: true
        }),
        new TableRow({
          children: [
            // '灰分(Ad)'
            new TableCell({
              children: [new Paragraph({
                text: '加权',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' }, //背景色
            }),
            new TableCell({
              children: [new Paragraph({
                text: '合格率(%)',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' },
            }),
            // '挥发分(Vdaf)'
            new TableCell({
              children: [new Paragraph({
                text: '加权',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [new Paragraph({
                text: '合格率(%)',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' },
            }),
            // '硫分(St,d)'
            new TableCell({
              children: [new Paragraph({
                text: '加权',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [new Paragraph({
                text: '合格率(%)',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' },
            }),
            // '粘结指数(GR.I)'
            new TableCell({
              children: [new Paragraph({
                text: '加权',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [new Paragraph({
                text: '合格率(%)',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' },
            }),
            // '胶质层厚度(Y)'
            new TableCell({
              children: [new Paragraph({
                text: '加权',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' },
            }),
            new TableCell({
              children: [new Paragraph({
                text: '合格率(%)',
                style: 'table2HeaderStyle',
                alignment: AlignmentType.CENTER,
                spacing: { before: 100, after: 100 },
              })],
              shading: { fill: '203764' },
            }),
          ],
          cantSplit: true
        }),
        ...newTable
      ],
      width: {
        size: 12000,
        // type: WidthType.AUTO,
        type: WidthType.DXA,
      },
    })
  }