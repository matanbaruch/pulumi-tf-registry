// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class ContactPoint extends pulumi.CustomResource {
    /**
     * Get an existing ContactPoint resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ContactPointState, opts?: pulumi.CustomResourceOptions): ContactPoint {
        return new ContactPoint(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'grafana:index/contactPoint:ContactPoint';

    /**
     * Returns true if the given object is an instance of ContactPoint.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ContactPoint {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ContactPoint.__pulumiType;
    }

    /**
     * A contact point that sends notifications to other Alertmanager instances.
     */
    public readonly alertmanagers!: pulumi.Output<outputs.ContactPointAlertmanager[] | undefined>;
    /**
     * A contact point that sends notifications to DingDing.
     */
    public readonly dingdings!: pulumi.Output<outputs.ContactPointDingding[] | undefined>;
    public readonly disableProvenance!: pulumi.Output<boolean | undefined>;
    /**
     * A contact point that sends notifications as Discord messages
     */
    public readonly discords!: pulumi.Output<outputs.ContactPointDiscord[] | undefined>;
    /**
     * A contact point that sends notifications to an email address.
     */
    public readonly emails!: pulumi.Output<outputs.ContactPointEmail[] | undefined>;
    /**
     * A contact point that sends notifications to Google Chat.
     */
    public readonly googlechats!: pulumi.Output<outputs.ContactPointGooglechat[] | undefined>;
    /**
     * A contact point that publishes notifications to Apache Kafka topics.
     */
    public readonly kafkas!: pulumi.Output<outputs.ContactPointKafka[] | undefined>;
    /**
     * A contact point that sends notifications to LINE.me.
     */
    public readonly lines!: pulumi.Output<outputs.ContactPointLine[] | undefined>;
    /**
     * The name of the contact point.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * A contact point that sends notifications to Grafana On-Call.
     */
    public readonly oncalls!: pulumi.Output<outputs.ContactPointOncall[] | undefined>;
    /**
     * A contact point that sends notifications to OpsGenie.
     */
    public readonly opsgenies!: pulumi.Output<outputs.ContactPointOpsgeny[] | undefined>;
    /**
     * The Organization ID. If not set, the Org ID defined in the provider block will be used.
     */
    public readonly orgId!: pulumi.Output<string | undefined>;
    /**
     * A contact point that sends notifications to PagerDuty.
     */
    public readonly pagerduties!: pulumi.Output<outputs.ContactPointPagerduty[] | undefined>;
    /**
     * A contact point that sends notifications to Pushover.
     */
    public readonly pushovers!: pulumi.Output<outputs.ContactPointPushover[] | undefined>;
    /**
     * A contact point that sends notifications to SensuGo.
     */
    public readonly sensugos!: pulumi.Output<outputs.ContactPointSensugo[] | undefined>;
    /**
     * A contact point that sends notifications to Slack.
     */
    public readonly slacks!: pulumi.Output<outputs.ContactPointSlack[] | undefined>;
    /**
     * A contact point that sends notifications to Amazon SNS. Requires Amazon Managed Grafana.
     */
    public readonly sns!: pulumi.Output<outputs.ContactPointSn[] | undefined>;
    /**
     * A contact point that sends notifications to Microsoft Teams.
     */
    public readonly teams!: pulumi.Output<outputs.ContactPointTeam[] | undefined>;
    /**
     * A contact point that sends notifications to Telegram.
     */
    public readonly telegrams!: pulumi.Output<outputs.ContactPointTelegram[] | undefined>;
    /**
     * A contact point that sends notifications to Threema.
     */
    public readonly threemas!: pulumi.Output<outputs.ContactPointThreema[] | undefined>;
    /**
     * A contact point that sends notifications to VictorOps (now known as Splunk OnCall).
     */
    public readonly victorops!: pulumi.Output<outputs.ContactPointVictorop[] | undefined>;
    /**
     * A contact point that sends notifications to Cisco Webex.
     */
    public readonly webexes!: pulumi.Output<outputs.ContactPointWebex[] | undefined>;
    /**
     * A contact point that sends notifications to an arbitrary webhook, using the Prometheus webhook format defined here:
     * https://prometheus.io/docs/alerting/latest/configuration/#webhook_config
     */
    public readonly webhooks!: pulumi.Output<outputs.ContactPointWebhook[] | undefined>;
    /**
     * A contact point that sends notifications to WeCom.
     */
    public readonly wecoms!: pulumi.Output<outputs.ContactPointWecom[] | undefined>;

    /**
     * Create a ContactPoint resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: ContactPointArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ContactPointArgs | ContactPointState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ContactPointState | undefined;
            resourceInputs["alertmanagers"] = state ? state.alertmanagers : undefined;
            resourceInputs["dingdings"] = state ? state.dingdings : undefined;
            resourceInputs["disableProvenance"] = state ? state.disableProvenance : undefined;
            resourceInputs["discords"] = state ? state.discords : undefined;
            resourceInputs["emails"] = state ? state.emails : undefined;
            resourceInputs["googlechats"] = state ? state.googlechats : undefined;
            resourceInputs["kafkas"] = state ? state.kafkas : undefined;
            resourceInputs["lines"] = state ? state.lines : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["oncalls"] = state ? state.oncalls : undefined;
            resourceInputs["opsgenies"] = state ? state.opsgenies : undefined;
            resourceInputs["orgId"] = state ? state.orgId : undefined;
            resourceInputs["pagerduties"] = state ? state.pagerduties : undefined;
            resourceInputs["pushovers"] = state ? state.pushovers : undefined;
            resourceInputs["sensugos"] = state ? state.sensugos : undefined;
            resourceInputs["slacks"] = state ? state.slacks : undefined;
            resourceInputs["sns"] = state ? state.sns : undefined;
            resourceInputs["teams"] = state ? state.teams : undefined;
            resourceInputs["telegrams"] = state ? state.telegrams : undefined;
            resourceInputs["threemas"] = state ? state.threemas : undefined;
            resourceInputs["victorops"] = state ? state.victorops : undefined;
            resourceInputs["webexes"] = state ? state.webexes : undefined;
            resourceInputs["webhooks"] = state ? state.webhooks : undefined;
            resourceInputs["wecoms"] = state ? state.wecoms : undefined;
        } else {
            const args = argsOrState as ContactPointArgs | undefined;
            resourceInputs["alertmanagers"] = args ? args.alertmanagers : undefined;
            resourceInputs["dingdings"] = args ? args.dingdings : undefined;
            resourceInputs["disableProvenance"] = args ? args.disableProvenance : undefined;
            resourceInputs["discords"] = args ? args.discords : undefined;
            resourceInputs["emails"] = args ? args.emails : undefined;
            resourceInputs["googlechats"] = args ? args.googlechats : undefined;
            resourceInputs["kafkas"] = args ? args.kafkas : undefined;
            resourceInputs["lines"] = args ? args.lines : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["oncalls"] = args ? args.oncalls : undefined;
            resourceInputs["opsgenies"] = args ? args.opsgenies : undefined;
            resourceInputs["orgId"] = args ? args.orgId : undefined;
            resourceInputs["pagerduties"] = args ? args.pagerduties : undefined;
            resourceInputs["pushovers"] = args ? args.pushovers : undefined;
            resourceInputs["sensugos"] = args ? args.sensugos : undefined;
            resourceInputs["slacks"] = args ? args.slacks : undefined;
            resourceInputs["sns"] = args ? args.sns : undefined;
            resourceInputs["teams"] = args ? args.teams : undefined;
            resourceInputs["telegrams"] = args ? args.telegrams : undefined;
            resourceInputs["threemas"] = args ? args.threemas : undefined;
            resourceInputs["victorops"] = args ? args.victorops : undefined;
            resourceInputs["webexes"] = args ? args.webexes : undefined;
            resourceInputs["webhooks"] = args ? args.webhooks : undefined;
            resourceInputs["wecoms"] = args ? args.wecoms : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ContactPoint.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ContactPoint resources.
 */
export interface ContactPointState {
    /**
     * A contact point that sends notifications to other Alertmanager instances.
     */
    alertmanagers?: pulumi.Input<pulumi.Input<inputs.ContactPointAlertmanager>[]>;
    /**
     * A contact point that sends notifications to DingDing.
     */
    dingdings?: pulumi.Input<pulumi.Input<inputs.ContactPointDingding>[]>;
    disableProvenance?: pulumi.Input<boolean>;
    /**
     * A contact point that sends notifications as Discord messages
     */
    discords?: pulumi.Input<pulumi.Input<inputs.ContactPointDiscord>[]>;
    /**
     * A contact point that sends notifications to an email address.
     */
    emails?: pulumi.Input<pulumi.Input<inputs.ContactPointEmail>[]>;
    /**
     * A contact point that sends notifications to Google Chat.
     */
    googlechats?: pulumi.Input<pulumi.Input<inputs.ContactPointGooglechat>[]>;
    /**
     * A contact point that publishes notifications to Apache Kafka topics.
     */
    kafkas?: pulumi.Input<pulumi.Input<inputs.ContactPointKafka>[]>;
    /**
     * A contact point that sends notifications to LINE.me.
     */
    lines?: pulumi.Input<pulumi.Input<inputs.ContactPointLine>[]>;
    /**
     * The name of the contact point.
     */
    name?: pulumi.Input<string>;
    /**
     * A contact point that sends notifications to Grafana On-Call.
     */
    oncalls?: pulumi.Input<pulumi.Input<inputs.ContactPointOncall>[]>;
    /**
     * A contact point that sends notifications to OpsGenie.
     */
    opsgenies?: pulumi.Input<pulumi.Input<inputs.ContactPointOpsgeny>[]>;
    /**
     * The Organization ID. If not set, the Org ID defined in the provider block will be used.
     */
    orgId?: pulumi.Input<string>;
    /**
     * A contact point that sends notifications to PagerDuty.
     */
    pagerduties?: pulumi.Input<pulumi.Input<inputs.ContactPointPagerduty>[]>;
    /**
     * A contact point that sends notifications to Pushover.
     */
    pushovers?: pulumi.Input<pulumi.Input<inputs.ContactPointPushover>[]>;
    /**
     * A contact point that sends notifications to SensuGo.
     */
    sensugos?: pulumi.Input<pulumi.Input<inputs.ContactPointSensugo>[]>;
    /**
     * A contact point that sends notifications to Slack.
     */
    slacks?: pulumi.Input<pulumi.Input<inputs.ContactPointSlack>[]>;
    /**
     * A contact point that sends notifications to Amazon SNS. Requires Amazon Managed Grafana.
     */
    sns?: pulumi.Input<pulumi.Input<inputs.ContactPointSn>[]>;
    /**
     * A contact point that sends notifications to Microsoft Teams.
     */
    teams?: pulumi.Input<pulumi.Input<inputs.ContactPointTeam>[]>;
    /**
     * A contact point that sends notifications to Telegram.
     */
    telegrams?: pulumi.Input<pulumi.Input<inputs.ContactPointTelegram>[]>;
    /**
     * A contact point that sends notifications to Threema.
     */
    threemas?: pulumi.Input<pulumi.Input<inputs.ContactPointThreema>[]>;
    /**
     * A contact point that sends notifications to VictorOps (now known as Splunk OnCall).
     */
    victorops?: pulumi.Input<pulumi.Input<inputs.ContactPointVictorop>[]>;
    /**
     * A contact point that sends notifications to Cisco Webex.
     */
    webexes?: pulumi.Input<pulumi.Input<inputs.ContactPointWebex>[]>;
    /**
     * A contact point that sends notifications to an arbitrary webhook, using the Prometheus webhook format defined here:
     * https://prometheus.io/docs/alerting/latest/configuration/#webhook_config
     */
    webhooks?: pulumi.Input<pulumi.Input<inputs.ContactPointWebhook>[]>;
    /**
     * A contact point that sends notifications to WeCom.
     */
    wecoms?: pulumi.Input<pulumi.Input<inputs.ContactPointWecom>[]>;
}

/**
 * The set of arguments for constructing a ContactPoint resource.
 */
export interface ContactPointArgs {
    /**
     * A contact point that sends notifications to other Alertmanager instances.
     */
    alertmanagers?: pulumi.Input<pulumi.Input<inputs.ContactPointAlertmanager>[]>;
    /**
     * A contact point that sends notifications to DingDing.
     */
    dingdings?: pulumi.Input<pulumi.Input<inputs.ContactPointDingding>[]>;
    disableProvenance?: pulumi.Input<boolean>;
    /**
     * A contact point that sends notifications as Discord messages
     */
    discords?: pulumi.Input<pulumi.Input<inputs.ContactPointDiscord>[]>;
    /**
     * A contact point that sends notifications to an email address.
     */
    emails?: pulumi.Input<pulumi.Input<inputs.ContactPointEmail>[]>;
    /**
     * A contact point that sends notifications to Google Chat.
     */
    googlechats?: pulumi.Input<pulumi.Input<inputs.ContactPointGooglechat>[]>;
    /**
     * A contact point that publishes notifications to Apache Kafka topics.
     */
    kafkas?: pulumi.Input<pulumi.Input<inputs.ContactPointKafka>[]>;
    /**
     * A contact point that sends notifications to LINE.me.
     */
    lines?: pulumi.Input<pulumi.Input<inputs.ContactPointLine>[]>;
    /**
     * The name of the contact point.
     */
    name?: pulumi.Input<string>;
    /**
     * A contact point that sends notifications to Grafana On-Call.
     */
    oncalls?: pulumi.Input<pulumi.Input<inputs.ContactPointOncall>[]>;
    /**
     * A contact point that sends notifications to OpsGenie.
     */
    opsgenies?: pulumi.Input<pulumi.Input<inputs.ContactPointOpsgeny>[]>;
    /**
     * The Organization ID. If not set, the Org ID defined in the provider block will be used.
     */
    orgId?: pulumi.Input<string>;
    /**
     * A contact point that sends notifications to PagerDuty.
     */
    pagerduties?: pulumi.Input<pulumi.Input<inputs.ContactPointPagerduty>[]>;
    /**
     * A contact point that sends notifications to Pushover.
     */
    pushovers?: pulumi.Input<pulumi.Input<inputs.ContactPointPushover>[]>;
    /**
     * A contact point that sends notifications to SensuGo.
     */
    sensugos?: pulumi.Input<pulumi.Input<inputs.ContactPointSensugo>[]>;
    /**
     * A contact point that sends notifications to Slack.
     */
    slacks?: pulumi.Input<pulumi.Input<inputs.ContactPointSlack>[]>;
    /**
     * A contact point that sends notifications to Amazon SNS. Requires Amazon Managed Grafana.
     */
    sns?: pulumi.Input<pulumi.Input<inputs.ContactPointSn>[]>;
    /**
     * A contact point that sends notifications to Microsoft Teams.
     */
    teams?: pulumi.Input<pulumi.Input<inputs.ContactPointTeam>[]>;
    /**
     * A contact point that sends notifications to Telegram.
     */
    telegrams?: pulumi.Input<pulumi.Input<inputs.ContactPointTelegram>[]>;
    /**
     * A contact point that sends notifications to Threema.
     */
    threemas?: pulumi.Input<pulumi.Input<inputs.ContactPointThreema>[]>;
    /**
     * A contact point that sends notifications to VictorOps (now known as Splunk OnCall).
     */
    victorops?: pulumi.Input<pulumi.Input<inputs.ContactPointVictorop>[]>;
    /**
     * A contact point that sends notifications to Cisco Webex.
     */
    webexes?: pulumi.Input<pulumi.Input<inputs.ContactPointWebex>[]>;
    /**
     * A contact point that sends notifications to an arbitrary webhook, using the Prometheus webhook format defined here:
     * https://prometheus.io/docs/alerting/latest/configuration/#webhook_config
     */
    webhooks?: pulumi.Input<pulumi.Input<inputs.ContactPointWebhook>[]>;
    /**
     * A contact point that sends notifications to WeCom.
     */
    wecoms?: pulumi.Input<pulumi.Input<inputs.ContactPointWecom>[]>;
}
