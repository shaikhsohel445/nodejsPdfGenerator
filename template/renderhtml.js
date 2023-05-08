
export default function RenderHTML(props) {
   
       const styles = {
           page: {
               marginLeft: "25px",
               marginRight: "25px",
               marginTop: "10px",
               "page-break-after": "always"
           },
   
           columnLayout: {
               display: "flex",
               justifyContent: "space-between",
               margin: "3rem 0 5rem 0",
               gap: "2rem"
           },
   
   
   
           column: {
               display: "flex",
               flexDirection: "column"
           },
   
   
   
           spacer2: {
               height: "2rem"
           },
   
   
   
           fullWidth: {
               width: "100%"
           },
   
   
   
           marginb0: {
               marginBottom: 0
           },
           addressFont: {
               fontSize: "8px",
               marginTop: '0px'
           },
           spaceBetween: {
               display: 'flex',
               justifyContent: 'space-between',
               width: '420px'
           },
           table: {
               width: "400px",
               borderCollapse: "collapse",
               borderRadius: "10px 0px 0px 10px !important",
               borderBottom: "1px solid grey"
           },
           tr: {
               border: "1px solid #707070",
               height: "25px !important",
               textAlign: "end !important",
               font: "Poppins !important",
               fontSize: '8px',
               color: "#fff",
               fontWeight: `400 !important`,
               padding: "8px",
               pointer: "cursor",
               background: "#3b3c37",
           },
           trTask: {
               border: "1px solid #707070",
               height: "25px !important",
               textAlign: "left !important",
               font: "Poppins !important",
               fontSize: '8px',
               color: "#fff",
               fontWeight: `400 !important`,
               padding: "8px",
               pointer: "cursor",
               background: "#3b3c37",
               // width: "400px",
           },
           td: {
               height: "25px !important",
               textAlign: "end !important",
               font: "Poppins !important",
               fontSize: '6px',
               color: "black",
               fontWeight: `400 !important`,
               padding: "8px",
               pointer: "cursor",
           },
           tdTask: {
               height: "25px !important",
               textAlign: "left !important",
               font: "Poppins !important",
               fontSize: '6px',
               color: "black",
               fontWeight: `400 !important`,
               padding: "8px",
               pointer: "cursor",
               // width: "400px",
           },
           ribbon: {
               fontSize: '10px',
               fontWeight: 'bold',
               color: '#FFF',
               textTransform: 'uppercase',
               textAlign: 'center',
               transform: 'rotate(-45deg)',
               webkitTransform: "rotate(-45deg)",
               width: '150px',
               display: 'block',
               background: '#79A70A',
               boxShadow: "0 3px 10px -5px rgba(0, 0, 0, 1)",
               position: 'absolute',
           }
       };
   
   
   
       return (
           <div>
               {/* <div class="ribbon">
                   <span>
                       approved
                   </span>
               </div> */}
   
   
   
               <div style={styles.page}>
                   <div style={styles.spaceBetween}>
                   <div></div>
                   <div style={{ width: '180px', background: 'green',borderRadius: '0px 0px 0px 41px',textAlign: 'center',padding:'0.05px',height:'30px' }}>
                           <p style={{marginTop:'0px'}}>{data.status}</p>
                   </div>
                   </div>
                   <div style={styles.spaceBetween}>
                       <div>
                           <img src={data.logo} alt="company logo" width="60px" height="60px" />
                           <p style={{ fontSize: '12px', marginTop: '0px', marginBottom: '0px', fontWeight: 'bold' }}>{data.name}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>{data.office_address ? data.office_address.address_line_one : '-'}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>{data.office_address ? data.office_address.city : '-'}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>{data.office_address ? data.office_address.state_name : '-'}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>{data.office_address ? data.office_address.zipcode : '-'}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>{data.office_address ? data.office_address.country_name : '-'}</p>
   
   
   
                       </div>
                       <div style={{ marginTop: '-25px' }}>
                           <p style={{ fontSize: '26px', marginBottom: '0px' }}>Invoice</p>
                           <p style={{ fontSize: '8px', marginTop: '-10px', textAlign: 'right', marginRight: '15px' }}># {data.invoice_no}</p>
                           <p style={{ fontSize: '6px', marginBottom: '0px', textAlign: 'right', marginRight: '15px' }}>Balance Due</p>
                           <p style={{ fontSize: '10px', marginTop: '0px', textAlign: 'right', marginRight: '15px' }}>$ {data.balance_due}</p>
                       </div>
                   </div>
                   <div style={{ height: "10px" }}></div>
                   <div style={styles.spaceBetween}>
                       <div>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>Bill to</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', fontWeight: 'bold' }}>{data.bill_to ? data.office_address.address_line_one : '-'}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>{data.bill_to ? data.office_address.city : '-'}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>{data.bill_to ? data.office_address.state_name : '-'}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>{data.bill_to ? data.office_address.zipcode : '-'}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', color: 'grey' }}>{data.bill_to ? data.office_address.country_name : '-'}</p>
   
   
   
                       </div>
                       <div style={{ marginTop: '25px' }}>
                           <p style={{ fontSize: '8px', marginBottom: '0px', marginRight: '15px', color: 'grey' }}>Invoice Date: &nbsp; &nbsp; &nbsp; {data.invoice_date}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', marginRight: '15px', color: 'grey' }}>&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;Terms: &nbsp; &nbsp; &nbsp; {data.terms}</p>
                           <p style={{ fontSize: '8px', marginTop: '0px', marginRight: '15px', color: 'grey' }}>&nbsp; &nbsp;&nbsp; &nbsp;Due Date: &nbsp; &nbsp; &nbsp; {data.due_date}</p>
                       </div>
                   </div>
                   <div>
                       <div style={{ height: "10px" }}></div>
                       <table style={styles.table}>
                           <tr style={styles.tr}>
                               <th style={styles.tr}>#</th>
                               <th style={styles.trTask}>Task&Description</th>
                               <th style={styles.tr}>Hours</th>
                               <th style={styles.tr}>Rate</th>
                               <th style={styles.tr}>Amount</th>
                           </tr>
                           {data.body_data && data.body_data.map((item, index) => (
                               <tr style={styles.td}>
                                   <td style={styles.td}>{index}</td>
                                   <td style={styles.tdTask}>
                                       {
                                           item.employee_name
                                       }
                                       <br />
                                       {
                                           item.description
                                       }
                                       {/* HariPriyanka Veerepalli @Narwal <br />
                               Narwal/FIS Global Services Provided for the Period of : 01
                               April 2022 - 30 April 2022 */}
                                   </td>
                                   <td style={styles.td}>{item.hours}</td>
                                   <td style={styles.td}>{item.rate}</td>
                                   <td style={styles.td}>{item.amount}</td>
                               </tr>
                           ))}
                       </table>
                   </div>
                   <div style={styles.spaceBetween}>
                       <div></div>
                       <div style={{ marginRight: '25px' }}>
                       <p style={{ fontSize: '8px', marginBottom: '0px', textAlign: 'right' }}>Sub Total&nbsp; &nbsp; &nbsp; {data.sub_total}</p>
                       <p style={{ fontSize: '8px', marginTop: '0px', marginBottom: '0px', textAlign: 'right' }}>Total&nbsp; &nbsp; &nbsp; {data.total}</p>
                       <p style={{ fontSize: '8px', marginTop: '0px', textAlign: 'right' }}>Balance Due&nbsp; &nbsp; &nbsp; {data.total_balance_due}</p>
                       <p style={{ fontSize: '8px', marginTop: '0px', textAlign: 'right' }}>Total Words&nbsp; &nbsp; {data.total_words}</p>
                   </div>
                   </div>
                   
                   <div style={{ height: "15px" }}></div>
                   <div>
                       <p style={{ fontSize: '8px' }}>Notes</p>
                       <p style={{ fontSize: '8px' }}>{data.notes}</p>
                       {/* <p style={{ fontSize: '8px' }}>Please do acknowledge the receipt of Invoice.</p>
                       <p style={{ fontSize: '8px', wordSpacing: 'normal' }}>Please do acknowledge the receipt of Invoice Please do acknowledge the receipt of Invoice.</p>
                       <p style={{ fontSize: '8px' }}>Thank you for business</p> */}
                   </div>
                   {/* <div>
                       <p style={{ fontSize: '8px' }}>Terms & Conditions</p>
                       <p style={{ fontSize: '8px' }}>Please pay the due on time</p>
                   </div> */}
               </div>
           </div>
       );
   }