// js/data.js - Ваши реальные данные
const goldData = {
    "balance_price": 4373.79,
    "futures_price": 4358.6,
    "updated_at": "08:46:47",
    "total_money": 151970.2,
    "strikes_count": 158,
    
    // ТОП уровни поддержки (самые важные PUT)
    "support_levels": [
        { "strike": 4300, "oi": 143, "premium": 1.3 },
        { "strike": 4280, "oi": 168, "premium": 1.1 },
        { "strike": 4250, "oi": 101, "premium": 0.6 },
        { "strike": 4200, "oi": 116, "premium": 0.5 },
        { "strike": 4175, "oi": 156, "premium": 0.1 }
    ],
    
    // ТОП уровни сопротивления (самые важные CALL)
    "resistance_levels": [
        { "strike": 4400, "oi": 144, "premium": 6.4 },
        { "strike": 4420, "oi": 104, "premium": 5.8 },
        { "strike": 4500, "oi": 219, "premium": 0.3 },
        { "strike": 4360, "oi": 132, "premium": 20.5 },
        { "strike": 4375, "oi": 100, "premium": 10 }
    ],
    
    // Максимальные объемы
    "max_volume_levels": [
        { "strike": 4300, "vol": 195, "type": "CALL" },
        { "strike": 4185, "vol": 92, "type": "PUT" },
        { "strike": 4420, "vol": 76, "type": "CALL" }
    ]
};
