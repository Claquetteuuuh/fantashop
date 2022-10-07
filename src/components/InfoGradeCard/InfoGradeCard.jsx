import React, { Component } from "react";
import "./info_grade_card.scss";

class InfoGradeCard extends Component {
  render() {
    return (
      <div className="info__grade-container">
        <div className="info__grade-content">
          <h1>{this.props.title}</h1>
          <div className="descriptions">
            <div className="text">
              <img src="./images/icons/check.svg" alt="valider" />
              <p className="paragraph">Avoir les commandes en priorité</p>
            </div>
            <div className="text">
              <img src="./images/icons/check.svg" alt="valider" />
              <p className="paragraph">-5% sur le shop</p>
            </div>
            <div className="text">
              <img src="./images/icons/check.svg" alt="valider" />
              <p className="paragraph">Salons textuels et vocaux privée</p>
            </div>
            <div className="text">
              <img src={this.props.bidIcon} alt="icon" />
              <p className="paragraph">{this.props.bidTitle}</p>
            </div>
            <div className="text">
              <img src={this.props.freeIcon} alt="icon" />
              <p className="paragraph">{this.props.freeTitle}</p>
            </div>
            <div className="text">
              <img src={this.props.luckyIcon} alt="icon" />
              <p className="paragraph">{this.props.luckyTitle}</p>
            </div>
            <div className="text">
              <img src={this.props.giveawayIcon} alt="icon" />
              <p className="paragraph">{this.props.giveawayTitle}</p>
            </div>
            <div className="text">
              <img src={this.props.colorIcon} alt="icon" />
              <p className="paragraph">{this.props.colorTitle}</p>
            </div>
            <div className="text">
              <img src={this.props.personalIcon} alt="icon" />
              <p className="paragraph">{this.props.personalTitle}</p>
            </div>
            <div className="text">
              <img src={this.props.conditionIcon} alt="icon" />
              <p className="paragraph">{this.props.conditionTitle}</p>
            </div>
            <div className="text">
              <img src={this.props.badge} alt="badge" />
              <p className="paragraph">Badges exclusif</p>
            </div>
            <div className="text">
              <img src="./images/icons/clock.svg" alt="icon" />
              <p>Durée: {this.props.times}</p>
            </div>
          </div>
          <div className="btn">
            <button onClick={this.props.hide}>Fermer</button>
          </div>
        </div>
      </div>
    );
  }
}

export default InfoGradeCard;
