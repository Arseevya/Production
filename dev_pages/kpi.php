<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("kpi");
?><?$APPLICATION->SetTitle("Компонент уведомления из ЛС");?>
<? $APPLICATION->IncludeComponent(
    "bit:kpi",
    "",
    array(
        "VISUAL" => "8"
    )
);?>
<? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>