import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker } from 'react-dates';

class RangePicker extends Component{
    constructor(props) {
        super(props);
        this.state ={
            startDate: null,
            endDate: null
        }
    }
    onDatesChange(startDate,endDate){
        console.log({startDate,endDate});
        this.setState({startDate,endDate})
    }
    render(){
      //  const { startDate, endDate, focusedInput } = this.state;

        return (
            <div>
                <DateRangePicker
                   
                    startDate={this.state.startDate} // momentPropTypes.momentObj or null,
                   // startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                    startDateId="startDate"
                    endDate={this.state.endDate} // momentPropTypes.momentObj or null,
                   // endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                    endDateId="endDate" // PropTypes.string.isRequired,
                    onDatesChange={({ startDate, endDate }) => console.log({ startDate, endDate })} // PropTypes.func.isRequired,
                    focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                    onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
                    
                />
    
            </div>
        )

    }
   
}

export default RangePicker;