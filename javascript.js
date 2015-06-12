<script type="text/javascript">

    $("[id$='btnCompare']").click(function (e) {
        DataGrid();
        e.preventDefault();
    });


    function DataGrid() {

        var portfolioA = $find("<%=ddlportfolio.ClientID %>").get_selectedItem().get_value();
        var portfolioB = $find("<%=ddlportfoliocompare.ClientID %>").get_selectedItem().get_value();

        if (portfolioA != '' && portfolioB != '') {

            $.ajax({
                type: "POST",
                url: "Modules/Portfolios/PortfolioWebService.asmx/GetPortfolioComparisonJSON",
                data: "{portfolioA: '" + portfolioA + "',portfolioB:'" + portfolioB + "'}",
                contentType: "application/json; charset=utf-8",
                dataType: "json",
                beforeSend: function () {
    
                },
                success: function (data) {

                var ITDataSource = data.d;

                 if ($("#ComparePortfolioTable").data("igGrid") === undefined) {

                 }
                 else
                 {

                 }//end if ($("#ComparePortfolioTable").data("igGrid") === undefined)

                 $("#ComparePortfolioTable").igGrid({
                        autoGenerateColumns: false,
                        columns:
                            [
                                { headerText: "INVESTMENT NAME", key: "InvestmentTitle", dataType: "string", hidden: true },
                                { headerText: "INVESTMENT ID", key: "InvestmentID", dataType: "string", hidden: true },
                                { headerText: "UII", key: "UII", dataType: "string", hidden: true },
                                { headerText: "Portfolio", key: "PortfolioName", dataType: "string" },
                                { headerText: "Portfolio ID", key: "PortfolioID", dataType: "string", hidden: true },
                                { headerText: "Template", key: "TemplateYear", dataType: "string" },
                                { headerText: "PY-1 2013",
                                    group: [
                                        { headerText: "DME", key: "PY2013DME", dataType: "number" },
                                        { headerText: "SS", key: "PY2013SS", dataType: "number" },
                                        { headerText: "Total", key: "PY2013Total", dataType: "number"}]
                                },
                                { headerText: "PY 2014",
                                    group: [
                                        { headerText: "DME", key: "PY2014DME", dataType: "number" },
                                        { headerText: "SS", key: "PY2014SS", dataType: "number" },
                                        { headerText: "Total", key: "PY2014Total", dataType: "number"}]
                                },
                                { headerText: "CY 2015",
                                    group: [
                                        { headerText: "DME", key: "CY2015DME", dataType: "number" },
                                        { headerText: "SS", key: "CY2015SS", dataType: "number" },
                                        { headerText: "Total", key: "CY2015Total", dataType: "number" }
                                    ]
                                },
                                { headerText: "BY 2016",
                                    group: [
                                        { headerText: "DME", key: "BY2016DME", dataType: "number" },
                                        { headerText: "SS", key: "BY2016SS", dataType: "number" },
                                        { headerText: "Total", key: "BY2016Total", dataType: "number" }
                                    ]
                                },
                                    { headerText: "BY+1 2017",
                                        group: [
                                        { headerText: "DME", key: "BY2017DME", dataType: "number" },
                                        { headerText: "SS", key: "BY2017SS", dataType: "number" },
                                        { headerText: "Total", key: "BY2017Total", dataType: "number" }
                                    ]
                                    }
                            ],
                        width: "100%",
                        height: "500px",
                        dataSource: ITDataSource,
                        dataSourceType: "json",
                        features:
                            [
                                {
                                    name: "GroupBy",
                                    groupByAreaVisibility: "hidden",
                                    columnSettings:
                                    [
                                        { columnKey: "InvestmentTitle", isGroupBy: true }

                                    ]
                                },
                                {
                                    name: "MultiColumnHeaders"
                                }
                            ],
                  
                    }); //End igGrid Function
                }, //end success
                error: function (xhr, ajaxOptions, thrownError) {
                      console.log(xhr.status);
                      console.log(thrownError);
                },
                complete: function () {
                    //$("#overlay").fadeOut();
                }
            }); //end ajax function

        }//end if (portfolioA != '' && portfolioB != '')

    }// end DataGrid Function




</script>