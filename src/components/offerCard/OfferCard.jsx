import React, { useState } from "react";
import "./offer.scss";
import InsertPhotoOutlinedIcon from "@mui/icons-material/InsertPhotoOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import { Button, Modal } from "react-bootstrap";
import OrderForm from "../OrderForm";

const OfferCard = ({ sessionPackage }) => {
  const [open, setOpen] = useState(false);

  const handleClose = () => {
    setOpen(false);
  };
  return (
    <div className="offerCard">
      <div className="top">
        <span className="title"> {sessionPackage.name}</span>
      </div>
      <div className="bottom">
        <div className="offer">
          <div className="offerItem">
            <div className="left">
              <InsertPhotoOutlinedIcon className="icon" />
              <span>LICZBA ZDJĘĆ NA WYBOR WRETUSZU:</span>
            </div>
            <div className="right">{`${sessionPackage.numberPhotos} szt.`}</div>
          </div>
          <div className="offerItem">
            <div className="left">
              <AccessTimeOutlinedIcon className="icon" />
              <span> CZAS TRWANIA SESJI:</span>
            </div>
            <div className="right">{`${sessionPackage.duration} min.`}</div>
          </div>
          <div className="offerItem">
            <div className="left">
              <AccountBalanceWalletOutlinedIcon className="icon" />
              <span>CENA:</span>
            </div>
            <div className="right">
              <div className="price">{`${sessionPackage.price} zl.`}</div>
            </div>
          </div>
        </div>
        <div onClick={() => setOpen(true)} className="button">
          Zamowic
        </div>
      </div>
      <Modal show={open} onHide={handleClose}>
        <Modal.Body>
          <OrderForm
            handleClose={handleClose}
            sessionPackageId={sessionPackage.id}
          />
        </Modal.Body>
      </Modal>
    </div>
  );
};
export default OfferCard;
