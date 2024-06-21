from rest_framework.views import APIView
from rest_framework.response import Response
import tushare as ts

class StockDataView(APIView):
    def get(self, request, format=None):
        ts.set_token('2166a798817a28a9431443cd46ab0746a3e111ce1d7fc15cc2171f2e')
        pro = ts.pro_api()
        df = pro.daily(ts_code='000001.SZ', start_date='20220101', end_date='20220201')
        data = df.to_dict(orient='records')
        return Response(data)
