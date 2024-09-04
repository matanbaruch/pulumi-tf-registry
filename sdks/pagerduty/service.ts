// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Service extends pulumi.CustomResource {
    /**
     * Get an existing Service resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServiceState, opts?: pulumi.CustomResourceOptions): Service {
        return new Service(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pagerduty:index/service:Service';

    /**
     * Returns true if the given object is an instance of Service.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Service {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Service.__pulumiType;
    }

    public readonly acknowledgementTimeout!: pulumi.Output<string | undefined>;
    public readonly alertCreation!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly alertGrouping!: pulumi.Output<string>;
    public readonly alertGroupingParameters!: pulumi.Output<outputs.ServiceAlertGroupingParameters | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly alertGroupingTimeout!: pulumi.Output<string>;
    public readonly autoPauseNotificationsParameters!: pulumi.Output<outputs.ServiceAutoPauseNotificationsParameters | undefined>;
    public readonly autoResolveTimeout!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createdAt!: pulumi.Output<string>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly escalationPolicy!: pulumi.Output<string>;
    public /*out*/ readonly htmlUrl!: pulumi.Output<string>;
    public readonly incidentUrgencyRule!: pulumi.Output<outputs.ServiceIncidentUrgencyRule | undefined>;
    public /*out*/ readonly lastIncidentTimestamp!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public readonly responsePlay!: pulumi.Output<string>;
    public readonly scheduledActions!: pulumi.Output<outputs.ServiceScheduledAction[] | undefined>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly supportHours!: pulumi.Output<outputs.ServiceSupportHours | undefined>;
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a Service resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServiceArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServiceArgs | ServiceState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServiceState | undefined;
            resourceInputs["acknowledgementTimeout"] = state ? state.acknowledgementTimeout : undefined;
            resourceInputs["alertCreation"] = state ? state.alertCreation : undefined;
            resourceInputs["alertGrouping"] = state ? state.alertGrouping : undefined;
            resourceInputs["alertGroupingParameters"] = state ? state.alertGroupingParameters : undefined;
            resourceInputs["alertGroupingTimeout"] = state ? state.alertGroupingTimeout : undefined;
            resourceInputs["autoPauseNotificationsParameters"] = state ? state.autoPauseNotificationsParameters : undefined;
            resourceInputs["autoResolveTimeout"] = state ? state.autoResolveTimeout : undefined;
            resourceInputs["createdAt"] = state ? state.createdAt : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["escalationPolicy"] = state ? state.escalationPolicy : undefined;
            resourceInputs["htmlUrl"] = state ? state.htmlUrl : undefined;
            resourceInputs["incidentUrgencyRule"] = state ? state.incidentUrgencyRule : undefined;
            resourceInputs["lastIncidentTimestamp"] = state ? state.lastIncidentTimestamp : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["responsePlay"] = state ? state.responsePlay : undefined;
            resourceInputs["scheduledActions"] = state ? state.scheduledActions : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["supportHours"] = state ? state.supportHours : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as ServiceArgs | undefined;
            if ((!args || args.escalationPolicy === undefined) && !opts.urn) {
                throw new Error("Missing required property 'escalationPolicy'");
            }
            resourceInputs["acknowledgementTimeout"] = args ? args.acknowledgementTimeout : undefined;
            resourceInputs["alertCreation"] = args ? args.alertCreation : undefined;
            resourceInputs["alertGrouping"] = args ? args.alertGrouping : undefined;
            resourceInputs["alertGroupingParameters"] = args ? args.alertGroupingParameters : undefined;
            resourceInputs["alertGroupingTimeout"] = args ? args.alertGroupingTimeout : undefined;
            resourceInputs["autoPauseNotificationsParameters"] = args ? args.autoPauseNotificationsParameters : undefined;
            resourceInputs["autoResolveTimeout"] = args ? args.autoResolveTimeout : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["escalationPolicy"] = args ? args.escalationPolicy : undefined;
            resourceInputs["incidentUrgencyRule"] = args ? args.incidentUrgencyRule : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["responsePlay"] = args ? args.responsePlay : undefined;
            resourceInputs["scheduledActions"] = args ? args.scheduledActions : undefined;
            resourceInputs["supportHours"] = args ? args.supportHours : undefined;
            resourceInputs["createdAt"] = undefined /*out*/;
            resourceInputs["htmlUrl"] = undefined /*out*/;
            resourceInputs["lastIncidentTimestamp"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Service.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Service resources.
 */
export interface ServiceState {
    acknowledgementTimeout?: pulumi.Input<string>;
    alertCreation?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    alertGrouping?: pulumi.Input<string>;
    alertGroupingParameters?: pulumi.Input<inputs.ServiceAlertGroupingParameters>;
    /**
     * @deprecated Deprecated
     */
    alertGroupingTimeout?: pulumi.Input<string>;
    autoPauseNotificationsParameters?: pulumi.Input<inputs.ServiceAutoPauseNotificationsParameters>;
    autoResolveTimeout?: pulumi.Input<string>;
    createdAt?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    escalationPolicy?: pulumi.Input<string>;
    htmlUrl?: pulumi.Input<string>;
    incidentUrgencyRule?: pulumi.Input<inputs.ServiceIncidentUrgencyRule>;
    lastIncidentTimestamp?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    responsePlay?: pulumi.Input<string>;
    scheduledActions?: pulumi.Input<pulumi.Input<inputs.ServiceScheduledAction>[]>;
    status?: pulumi.Input<string>;
    supportHours?: pulumi.Input<inputs.ServiceSupportHours>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Service resource.
 */
export interface ServiceArgs {
    acknowledgementTimeout?: pulumi.Input<string>;
    alertCreation?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    alertGrouping?: pulumi.Input<string>;
    alertGroupingParameters?: pulumi.Input<inputs.ServiceAlertGroupingParameters>;
    /**
     * @deprecated Deprecated
     */
    alertGroupingTimeout?: pulumi.Input<string>;
    autoPauseNotificationsParameters?: pulumi.Input<inputs.ServiceAutoPauseNotificationsParameters>;
    autoResolveTimeout?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    escalationPolicy: pulumi.Input<string>;
    incidentUrgencyRule?: pulumi.Input<inputs.ServiceIncidentUrgencyRule>;
    name?: pulumi.Input<string>;
    responsePlay?: pulumi.Input<string>;
    scheduledActions?: pulumi.Input<pulumi.Input<inputs.ServiceScheduledAction>[]>;
    supportHours?: pulumi.Input<inputs.ServiceSupportHours>;
}
