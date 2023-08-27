<?
require($_SERVER["DOCUMENT_ROOT"]."/bitrix/header.php");
$APPLICATION->SetTitle("Компонент уведомления из ЛС");
?><?$APPLICATION->IncludeComponent(
	"bit:user_profile_notifications",
	"",
	Array(
		"VISUAL" => "8"
	)
);?><br><?require($_SERVER["DOCUMENT_ROOT"]."/bitrix/footer.php");?>