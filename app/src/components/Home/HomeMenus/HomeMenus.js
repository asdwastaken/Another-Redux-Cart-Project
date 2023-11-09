import InfoMenu from "./InfoMenu";

export default function HomeMenus({
    onMenuClick,
    activeMenu,
}) {

    return (
        <>
            <div className="product-info-container">
                <div className={activeMenu.info ? "product-info-inner active" : "product-info-inner"} onClick={() => onMenuClick('info')}>
                    Info
                </div>
                <div className={activeMenu.brand ? "product-brand-inner active" : "product-brand-inner"} onClick={() => onMenuClick('brand')}>
                    Brand
                </div>
                <div className={activeMenu.delivery ? "product-delivery-inner active" : "product-delivery-inner"} onClick={() => onMenuClick('delivery')}>
                    Delivery
                </div>
            </div>

            {activeMenu.info && <InfoMenu />}
        </>
    )
}