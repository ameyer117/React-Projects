import * as Sentry from '@sentry/react'

export class LoggingService {
    static category = {
        auth: 'auth',
        uiPress: 'ui.press'
    }

    static logInfo(category, message) {
        Sentry.addBreadcrumb({
            category,
            message,
            level: Sentry.Severity.Info
        })
    }

    static logNavigation(fromRoute, toRoute) {
        Sentry.addBreadcrumb({
            type: 'navigation',
            category: 'navigation',
            data: {
                from: fromRoute,
                to: toRoute
            }
        })
    }

    static logException(ex, context) {
        Sentry.captureException(ex, {extra: context})
    }
}