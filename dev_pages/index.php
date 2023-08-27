<?
require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/header.php");
$APPLICATION->SetTitle("Title");
?><?$APPLICATION->IncludeComponent(
	"bit:videocameras",
	"",
	Array(
		"CACHE_TIME" => "36000",
		"CACHE_TYPE" => "N",
		"IBLOCK_CODE" => "18",
		"IBLOCK_TYPE" => "bit"
	)
);?><? require($_SERVER["DOCUMENT_ROOT"] . "/bitrix/footer.php"); ?>