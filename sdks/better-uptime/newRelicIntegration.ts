// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NewRelicIntegration extends pulumi.CustomResource {
    /**
     * Get an existing NewRelicIntegration resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NewRelicIntegrationState, opts?: pulumi.CustomResourceOptions): NewRelicIntegration {
        return new NewRelicIntegration(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'better-uptime:index/newRelicIntegration:NewRelicIntegration';

    /**
     * Returns true if the given object is an instance of NewRelicIntegration.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NewRelicIntegration {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NewRelicIntegration.__pulumiType;
    }

    /**
     * Should we alert only on alarms, or on both alarms and warnings. Possible values: alert, alert_and_warn.
     */
    public readonly alertingRule!: pulumi.Output<string>;
    /**
     * Do we call the on-call person?
     */
    public readonly call!: pulumi.Output<boolean>;
    /**
     * Do we send an email to the on-call person?
     */
    public readonly email!: pulumi.Output<boolean>;
    /**
     * The name of the AWS CloudWatch Integration.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Is the AWS CloudWatch integration paused.
     */
    public readonly paused!: pulumi.Output<boolean>;
    /**
     * ID of the escalation policy associated with the AWS CloudWatch integration.
     */
    public readonly policyId!: pulumi.Output<number>;
    /**
     * Do we send a push notification to the on-call person?
     */
    public readonly push!: pulumi.Output<boolean>;
    /**
     * How long the alert must be up to automatically mark an incident as resolved. In seconds.
     */
    public readonly recoveryPeriod!: pulumi.Output<number>;
    /**
     * Do we send an SMS to the on-call person?
     */
    public readonly sms!: pulumi.Output<boolean>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    public readonly teamName!: pulumi.Output<string | undefined>;
    /**
     * How long we wait before escalating the incident alert to the team. In seconds.
     */
    public readonly teamWait!: pulumi.Output<number>;
    /**
     * The webhook URL for the AWS CloudWatch integration.
     */
    public /*out*/ readonly webhookUrl!: pulumi.Output<string>;

    /**
     * Create a NewRelicIntegration resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NewRelicIntegrationArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NewRelicIntegrationArgs | NewRelicIntegrationState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NewRelicIntegrationState | undefined;
            resourceInputs["alertingRule"] = state ? state.alertingRule : undefined;
            resourceInputs["call"] = state ? state.call : undefined;
            resourceInputs["email"] = state ? state.email : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["paused"] = state ? state.paused : undefined;
            resourceInputs["policyId"] = state ? state.policyId : undefined;
            resourceInputs["push"] = state ? state.push : undefined;
            resourceInputs["recoveryPeriod"] = state ? state.recoveryPeriod : undefined;
            resourceInputs["sms"] = state ? state.sms : undefined;
            resourceInputs["teamName"] = state ? state.teamName : undefined;
            resourceInputs["teamWait"] = state ? state.teamWait : undefined;
            resourceInputs["webhookUrl"] = state ? state.webhookUrl : undefined;
        } else {
            const args = argsOrState as NewRelicIntegrationArgs | undefined;
            resourceInputs["alertingRule"] = args ? args.alertingRule : undefined;
            resourceInputs["call"] = args ? args.call : undefined;
            resourceInputs["email"] = args ? args.email : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["paused"] = args ? args.paused : undefined;
            resourceInputs["policyId"] = args ? args.policyId : undefined;
            resourceInputs["push"] = args ? args.push : undefined;
            resourceInputs["recoveryPeriod"] = args ? args.recoveryPeriod : undefined;
            resourceInputs["sms"] = args ? args.sms : undefined;
            resourceInputs["teamName"] = args ? args.teamName : undefined;
            resourceInputs["teamWait"] = args ? args.teamWait : undefined;
            resourceInputs["webhookUrl"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(NewRelicIntegration.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NewRelicIntegration resources.
 */
export interface NewRelicIntegrationState {
    /**
     * Should we alert only on alarms, or on both alarms and warnings. Possible values: alert, alert_and_warn.
     */
    alertingRule?: pulumi.Input<string>;
    /**
     * Do we call the on-call person?
     */
    call?: pulumi.Input<boolean>;
    /**
     * Do we send an email to the on-call person?
     */
    email?: pulumi.Input<boolean>;
    /**
     * The name of the AWS CloudWatch Integration.
     */
    name?: pulumi.Input<string>;
    /**
     * Is the AWS CloudWatch integration paused.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * ID of the escalation policy associated with the AWS CloudWatch integration.
     */
    policyId?: pulumi.Input<number>;
    /**
     * Do we send a push notification to the on-call person?
     */
    push?: pulumi.Input<boolean>;
    /**
     * How long the alert must be up to automatically mark an incident as resolved. In seconds.
     */
    recoveryPeriod?: pulumi.Input<number>;
    /**
     * Do we send an SMS to the on-call person?
     */
    sms?: pulumi.Input<boolean>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    teamName?: pulumi.Input<string>;
    /**
     * How long we wait before escalating the incident alert to the team. In seconds.
     */
    teamWait?: pulumi.Input<number>;
    /**
     * The webhook URL for the AWS CloudWatch integration.
     */
    webhookUrl?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a NewRelicIntegration resource.
 */
export interface NewRelicIntegrationArgs {
    /**
     * Should we alert only on alarms, or on both alarms and warnings. Possible values: alert, alert_and_warn.
     */
    alertingRule?: pulumi.Input<string>;
    /**
     * Do we call the on-call person?
     */
    call?: pulumi.Input<boolean>;
    /**
     * Do we send an email to the on-call person?
     */
    email?: pulumi.Input<boolean>;
    /**
     * The name of the AWS CloudWatch Integration.
     */
    name?: pulumi.Input<string>;
    /**
     * Is the AWS CloudWatch integration paused.
     */
    paused?: pulumi.Input<boolean>;
    /**
     * ID of the escalation policy associated with the AWS CloudWatch integration.
     */
    policyId?: pulumi.Input<number>;
    /**
     * Do we send a push notification to the on-call person?
     */
    push?: pulumi.Input<boolean>;
    /**
     * How long the alert must be up to automatically mark an incident as resolved. In seconds.
     */
    recoveryPeriod?: pulumi.Input<number>;
    /**
     * Do we send an SMS to the on-call person?
     */
    sms?: pulumi.Input<boolean>;
    /**
     * Used to specify the team the resource should be created in when using global tokens.
     */
    teamName?: pulumi.Input<string>;
    /**
     * How long we wait before escalating the incident alert to the team. In seconds.
     */
    teamWait?: pulumi.Input<number>;
}
