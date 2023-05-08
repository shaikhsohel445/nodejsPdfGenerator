const templateHtml = `<!DOCTYPE html>
<html>
<head>
    <title>Invoice</title>
    <style>
    .page {
        margin-left: 25px;
        margin-right: 25px;
        margin-top: 10px;
        page-break-after: always;
    }

    .columnLayout {
        display: flex;
        justify-content: space-between;
        margin: 3rem 0 5rem 0;
        gap: 2rem;
    }

    .column {
        display: flex;
        flex-direction: column;
    }

    .spacer2 {
        height: 2rem;
    }

    .fullWidth {
        width: 100%;
    }

    .marginb0 {
        margin-bottom: 0;
    }

    .addressFont {
        font-size: 8px;
        margin-top: 0px;
    }

    .spaceBetween {
        display: flex;
        justify-content: space-between;
        width: 420px;
    }

    .table {
        width: 400px;
        border-collapse: collapse;
        border-radius: 10px 0px 0px 10px !important;
        border-bottom: 1px solid grey;
    }

    .tr {
        border: 1px solid #707070;
        height: 25px !important;
        text-align: end !important;
        font: Poppins !important;
        font-size: 8px;
        color: #fff;
        font-weight: 400 !important;
        padding: 8px;
        cursor: pointer;
        background: #3b3c37;
    }

    .trTask {
        border: 1px solid #707070;
        height: 25px !important;
        text-align: left !important;
        font: Poppins !important;
        font-size: 8px;
        color: #fff;
        font-weight: 400 !important;
        padding: 8px;
        cursor: pointer;
        background: #3b3c37;
        /* width: 400px; */
    }

    .td {
        height: 25px !important;
        text-align: end !important;
        font: Poppins !important;
        font-size: 6px;
        color: black;
        font-weight: 400 !important;
        padding: 8px;
        cursor: pointer;
    }

    .tdTask {
        height: 25px !important;
        text-align: left !important;
        font: Poppins !important;
        font-size: 6px;
        color: black;
        font-weight: 400 !important;
        padding: 8px;
        cursor: pointer;
        /* width: 400px; */
    }

    .ribbon {
        font-size: 10px;
        font-weight: bold;
        color: #FFF;
        text-transform: uppercase;
        text-align: center;
        transform: rotate(-45deg);
        -webkit-transform: rotate(-45deg);
        width: 150px;
        display: block;
        background: #79A70A;
        box-shadow: 0 3px 10px -5px rgba(0, 0, 0, 1);
        position: absolute;
    }
</style>

</head>
<body>
    <div>
        <div style="margin-left:25px; margin-right:25px; margin-top:10px; page-break-after:always;">
            <div style="display:flex; justify-content:space-between; margin:3rem 0 5rem 0; gap:2rem;">
                <div></div>
                <div style="width:180px; background:green; border-radius:0px 0px 0px 41px; text-align:center; padding:0.05px; height:30px;">
                    <p style="margin-top:0px;">{data.status}</p>
                </div>
            </div>
            <div style="display:flex; justify-content:space-between;">
                <div>
                    <img src="{data.logo}" alt="company logo" width="60px" height="60px" />
                    <p style="font-size:12px; margin-top:0px; margin-bottom:0px; font-weight:bold;">{data.name}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">{data.office_address ? data.office_address.address_line_one : '-'}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">{data.office_address ? data.office_address.city : '-'}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">{data.office_address ? data.office_address.state_name : '-'}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">{data.office_address ? data.office_address.zipcode : '-'}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">{data.office_address ? data.office_address.country_name : '-'}</p>
                </div>
                <div style="margin-top:-25px;">
                    <p style="font-size:26px; margin-bottom:0px;">Invoice</p>
                    <p style="font-size:8px; margin-top:-10px; text-align:right; margin-right:15px;"># {data.invoice_no}</p>
                    <p style="font-size:6px; margin-bottom:0px; text-align:right; margin-right:15px;">Balance Due</p>
                    <p style="font-size:10px; margin-top:0px; text-align:right; margin-right:15px;">$ {data.balance_due}</p>
                </div>
            </div>
            <div style="height:10px;"></div>
            <div style="display:flex; justify-content:space-between;">
                <div>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">Bill to</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; font-weight:bold;">{data.bill_to ? data.office_address.address_line_one : '-'}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">{data.bill_to ? data.office_address.city : '-'}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">{data.bill_to ? data.office_address.state_name : '-'}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">{data.bill_to ? data.office_address.zipcode : '-'}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; color:grey;">{data.bill_to ? data.office_address.country_name : '-'}</p>
                </div>
                <div style="margin-top:25px;">
                    <p style="font-size:8px; margin-bottom:0px; margin-right:15px; color:grey;">Invoice Date:       {data.invoice_date}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; margin-right:15px; color:grey;">            Terms:       {data.terms}</p>
                    <p style="font-size:8px; margin-top:0px; margin-right:15px; color:grey;">      Due Date:       {data.due_date}</p>
                </div>
            </div>
            <div>
                <div style="height:10px;"></div>
                <table style="width:400px; border-collapse:collapse; border-radius:10px 0px 0px 10px !important; border-bottom:1px solid grey;">
                    <tr style="border:1px solid #707070; height:25px !important; text-align:end !important; font:Poppins !important; font-size:8px; color:#fff; font-weight:400 !important; padding:8px; cursor:pointer; background:#3b3c37;">
                        <th style="border:1px solid #707070;">#</th>
                        <th style="border:1px solid #707070; text-align:left !important;">Task&Description</th>
                        <th style="border:1px solid #707070;">Hours</th>
                        <th style="border:1px solid #707070;">Rate</th>
                        <th style="border:1px solid #707070;">Amount</th>
                    </tr>
                    {data.body_data && data.body_data.map((item, index) => (
                    <tr style="height:25px !important; text-align:end !important; font:Poppins !important; font-size:6px; color:black; font-weight:400 !important; padding:8px; cursor:pointer;">
                        <td style="height:25px !important; text-align:end !important; font:Poppins !important; font-size:6px; color:black; font-weight:400 !important; padding:8px; cursor:pointer;">{index}</td>
                        <td style="height:25px !important; text-align:left !important; font:Poppins !important; font-size:6px; color:black; font-weight:400 !important; padding:8px; cursor:pointer;">
                            {item.employee_name}
                            <br />
                            {item.description}
                        </td>
                        <td style="height:25px !important; text-align:end !important; font:Poppins !important; font-size:6px; color:black; font-weight:400 !important; padding:8px; cursor:pointer;">{item.hours}</td>
                        <td style="height:25px !important; text-align:end !important; font:Poppins !important; font-size:6px; color:black; font-weight:400 !important; padding:8px; cursor:pointer;">{item.rate}</td>
                        <td style="height:25px !important; text-align:end !important; font:Poppins !important; font-size:6px; color:black; font-weight:400 !important; padding:8px; cursor:pointer;">{item.amount}</td>
                    </tr>
                    ))}
                </table>
            </div>
            <div style="display:flex; justify-content:space-between;">
                <div></div>
                <div style="margin-right:25px;">
                    <p style="font-size:8px; margin-bottom:0px; text-align:right;">Sub Total      {data.sub_total}</p>
                    <p style="font-size:8px; margin-top:0px; margin-bottom:0px; text-align:right;">Total      {data.total}</p>
                    <p style="font-size:8px; margin-top:0px; text-align:right;">Balance Due      {data.total_balance_due}</p>
                    <p style="font-size:8px; margin-top:0px; text-align:right;">Total Words    {data.total_words}</p>
                </div>
            </div>
            <div style="height:15px;"></div>
            <div>
                <p style="font-size:8px;">Notes</p>
                <p style="font-size:8px;">{data.notes}</p>
            </div>
        </div>
    </div>
</body>
</html>`

module.exports = {templateHtml}