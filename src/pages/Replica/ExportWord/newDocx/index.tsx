import {
    Packer,
    Document,
    Paragraph,
    TextRun,
    AlignmentType,
    ImageRun,
    Table,
    TableCell,
    TableRow,
    VerticalAlign,
    WidthType,
    PageOrientation,
    PageBreak,
} from 'docx';
import getChartDataUrl from './base64';
import { table2_2 } from './tableOption'
import { getOption as getStaticOption } from '../option';
import { message } from 'antd';
import {exportWordData } from '@/constants/exportWordData'

export const newDocx = async (source: any) => {
    const echartUrl = getChartDataUrl(
        getStaticOption(source, false),'1000px', '500px'
    )
    const tableData = exportWordData;

    try {
        const doc = new Document({
            styles: {
                paragraphStyles: [
                    {
                        id: "bodyContent",
                        name: "bodyContent",
                        quickFormat: true,
                        run: {
                            color: "000000",
                            italics: false,
                        },
                        paragraph: {
                            indent: {
                                firstLine: 360,
                            },
                            spacing: {
                                line: 276,
                                before: 20 * 72 * 0.1,
                                after: 20 * 72 * 0.05
                            },
                        },
                    },
                    {
                        id: 'tableHeaderStyle',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 10 * 2,
                            bold: true,
                            //   color: '#FF0000'
                        },
                    },
                    {
                        id: 'table2HeaderStyle',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 9 * 2,
                            bold: true,
                            //   color: '#FF0000'
                        },
                    },
                    {
                        id: 'tableBoldStyle',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 10 * 2,
                            bold: true,
                            //   color: '#FF0000'
                        },
                    },
                    {
                        id: 'tablered',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 10 * 2,
                            bold: true,
                            color: '#FF0000'
                        },
                    },
                    {
                        id: 'tablegreen',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 10 * 2,
                            bold: true,
                            color: '#00BB00'
                        },
                    },
                    {
                        id: 'tableblue',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 10 * 2,
                            bold: true,
                            color: '#0066CC'
                        },
                    },
                    {
                        id: 'table2green',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 9 * 2,
                            bold: true,
                            color: '#00BB00'
                        },
                    },
                    {
                        id: 'table2',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 9 * 2,

                        },
                    },
                    {
                        id: 'table2bold',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 9 * 2,
                            bold: true,
                        },
                    },
                    {
                        id: 'table2blue',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 9 * 2,
                            bold: true,
                            color: '#0066CC'
                        },
                    },
                    {
                        id: 'table2red',
                        name: 'Table Header Style',
                        basedOn: 'Normal',
                        next: 'Normal',
                        quickFormat: true,
                        run: {
                            font: '微软雅黑',
                            size: 9 * 2,
                            bold: true,
                            color: '#FF0000'
                        },
                    },
                ],
            },
            sections: [
                {
                    properties: {
                        page: {
                            size: {
                                orientation: PageOrientation.LANDSCAPE, // 设置横版
                            },
                        },
                    },
                    children: [
                        // 标题
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new TextRun({
                                    text: `原料煤采购报告`,
                                    bold: true,
                                    font: { eastAsia: '微软雅黑' },
                                    size: 22 * 2,
                                }),
                            ],
                        }),
                        // 标题
                        new Paragraph({
                            style: 'firstTitleStyle',
                            spacing: {
                                before: 500,
                            },
                            children: [
                                new TextRun({
                                    text: `一、测试图表`,
                                    bold: true,
                                }),
                            ],
                        }),
                        // echarts
                        new Paragraph({
                            alignment: AlignmentType.CENTER,
                            children: [
                                new ImageRun({
                                    data: echartUrl,
                                    transformation: {
                                        width: 800,
                                        height: 400,
                                    },
                                }),
                                new PageBreak()// 分页
                            ],
                        }),
                        // 表格
                        table2_2(tableData),
                    ]
                }
            ]
        })
        const blob = await Packer.toBlob(doc)
        const link = document.createElement('a');
        link.href = URL.createObjectURL(blob);
        link.download = '测试采购报告.docx';

        // Click the link to download the file
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        message.success('导出成功！')

    } catch (error) {
        message.error('导出失败！')
    }

}
