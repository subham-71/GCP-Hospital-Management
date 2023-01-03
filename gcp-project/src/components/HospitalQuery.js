import React from 'react'
import './HospitalQuery.css'

export default function HospitalQuery() {
  return (
    <div className="container">
      <div className="item1">
        <h3>Active Queries</h3>
        <table id="query_table" data-paginate="true">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Name of Hospital</th>
              <th scope="col">Address</th>
              <th scope="col">Requirement</th>
              <th scope="col">Quantity</th>
              <th scope="col">Urgency</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="radio" name="selected" defaultValue={1} /></td>
              <td>Hospital A</td>
              <td>123 Main Street</td>
              <td>Masks</td>
              <td>1000</td>
              <td>High</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={2} /></td>
              <td>Hospital B</td>
              <td>456 Maple Avenue</td>
              <td>Gloves</td>
              <td>500</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={3} /></td>
              <td>Hospital C</td>
              <td>789 Oak Street</td>
              <td>Gowns</td>
              <td>2000</td>
              <td>Low</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={4} /></td>
              <td>Hospital D</td>
              <td>111 Pine Street</td>
              <td>Hand Sanitizer</td>
              <td>5000</td>
              <td>High</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={5} /></td>
              <td>Hospital E</td>
              <td>222 Cedar Street</td>
              <td>Ventilators</td>
              <td>10</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={6} /></td>
              <td>Hospital C</td>
              <td>789 Oak Street</td>
              <td>Gowns</td>
              <td>2000</td>
              <td>Low</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={7} /></td>
              <td>Hospital D</td>
              <td>111 Pine Street</td>
              <td>Blood Type B-</td>
              <td>5 litres</td>
              <td>High</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={8} /></td>
              <td>Hospital E</td>
              <td>222 Cedar Street</td>
              <td>Liver</td>
              <td>1</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={9} /></td>
              <td>Hospital L</td>
              <td>789 Oak Street</td>
              <td>Gowns</td>
              <td>2000</td>
              <td>Low</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={10} /></td>
              <td>Hospital K</td>
              <td>111 Pine Street</td>
              <td>Hand Sanitizer</td>
              <td>5000</td>
              <td>High</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={11} /></td>
              <td>Hospital    N</td>
              <td>222 Cedar Street</td>
              <td>Ventilators</td>
              <td>10</td>
              <td>Medium</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={12} /></td>
              <td>Hospital V</td>
              <td>789 Oak Street</td>
              <td>Gowns</td>
              <td>2000</td>
              <td>Low</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={13} /></td>
              <td>Hospital Y</td>
              <td>111 Pine Street</td>
              <td>Blood Type B-</td>
              <td>5 litres</td>
              <td>High</td>
            </tr>
            <tr>
              <td><input type="radio" name="selected" defaultValue={14} /></td>
              <td>Hospital X</td>
              <td>222 Cedar Street</td>
              <td>Liver</td>
              <td>1</td>
              <td>Medium</td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="item2">
        <h3>Query Selected</h3>
        <table id="details">
          <thead>
            <tr>
              <th scope="col">Select</th>
              <th scope="col">Name of Hospital</th>
              <th scope="col">Address</th>
              <th scope="col">Requirement</th>
              <th scope="col">Quantity</th>
              <th scope="col">Urgency</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
      </div>
      <br />
      <div className="item3">
        <button type="button" className="btn btn-primary">Reply to Query</button>
        <button type="button" className="btn btn-primary">Raise a Query</button>
      </div>
    </div>
  )
}
