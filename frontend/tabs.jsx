import React from 'react';

class Tabs extends React.Component{
  constructor(props){
    super(props);
    this.tabs = props.tabArray;
    this.state ={
      selected: 0
    };
  }

  updateIndex(e, idx){
    this.setState({ selected: idx });
  }

  render(){
    return (
      <div className="tabs-box">
        <ul className="tab-ul">
          {
            this.tabs.map((tab, idx) =>
              <li className={idx === this.state.selected ? "tab-li" : "tab-li tab-bottom-border"} >
                <header className="tab-header" onClick={ (e)=> this.updateIndex(e, idx) }><h1>{tab.title}</h1></header>
              </li>
            )
          }
        </ul>
        {
          this.tabs.map((tab, idx) => {
            return this.state.selected === idx ?
              <article className="tab-content">
                {tab.content}
              </article>
              : "";
          })
        }
      </div>
    );
  }
}

export default Tabs;