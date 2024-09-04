// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AlertChannelSplunk extends pulumi.CustomResource {
    /**
     * Get an existing AlertChannelSplunk resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertChannelSplunkState, opts?: pulumi.CustomResourceOptions): AlertChannelSplunk {
        return new AlertChannelSplunk(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lacework:index/alertChannelSplunk:AlertChannelSplunk';

    /**
     * Returns true if the given object is an instance of AlertChannelSplunk.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertChannelSplunk {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertChannelSplunk.__pulumiType;
    }

    /**
     * The Splunk channel name
     */
    public readonly channel!: pulumi.Output<string | undefined>;
    public /*out*/ readonly createdOrUpdatedBy!: pulumi.Output<string>;
    public /*out*/ readonly createdOrUpdatedTime!: pulumi.Output<string>;
    /**
     * The state of the external integration
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public readonly eventData!: pulumi.Output<outputs.AlertChannelSplunkEventData>;
    /**
     * The token you generate when you create a new HEC input
     */
    public readonly hecToken!: pulumi.Output<string>;
    /**
     * The hostname of the client from which you're sending data
     */
    public readonly host!: pulumi.Output<string>;
    public /*out*/ readonly intgGuid!: pulumi.Output<string>;
    /**
     * The integration name
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly orgLevel!: pulumi.Output<boolean>;
    /**
     * The destination port for forwarding events
     */
    public readonly port!: pulumi.Output<number>;
    /**
     * Enable or Disable SSL
     */
    public readonly ssl!: pulumi.Output<boolean | undefined>;
    /**
     * Whether to test the integration of an alert channel upon creation and modification
     */
    public readonly testIntegration!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly typeName!: pulumi.Output<string>;

    /**
     * Create a AlertChannelSplunk resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertChannelSplunkArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertChannelSplunkArgs | AlertChannelSplunkState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlertChannelSplunkState | undefined;
            resourceInputs["channel"] = state ? state.channel : undefined;
            resourceInputs["createdOrUpdatedBy"] = state ? state.createdOrUpdatedBy : undefined;
            resourceInputs["createdOrUpdatedTime"] = state ? state.createdOrUpdatedTime : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["eventData"] = state ? state.eventData : undefined;
            resourceInputs["hecToken"] = state ? state.hecToken : undefined;
            resourceInputs["host"] = state ? state.host : undefined;
            resourceInputs["intgGuid"] = state ? state.intgGuid : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgLevel"] = state ? state.orgLevel : undefined;
            resourceInputs["port"] = state ? state.port : undefined;
            resourceInputs["ssl"] = state ? state.ssl : undefined;
            resourceInputs["testIntegration"] = state ? state.testIntegration : undefined;
            resourceInputs["typeName"] = state ? state.typeName : undefined;
        } else {
            const args = argsOrState as AlertChannelSplunkArgs | undefined;
            if ((!args || args.eventData === undefined) && !opts.urn) {
                throw new Error("Missing required property 'eventData'");
            }
            if ((!args || args.hecToken === undefined) && !opts.urn) {
                throw new Error("Missing required property 'hecToken'");
            }
            if ((!args || args.host === undefined) && !opts.urn) {
                throw new Error("Missing required property 'host'");
            }
            if ((!args || args.port === undefined) && !opts.urn) {
                throw new Error("Missing required property 'port'");
            }
            resourceInputs["channel"] = args ? args.channel : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["eventData"] = args ? args.eventData : undefined;
            resourceInputs["hecToken"] = args ? args.hecToken : undefined;
            resourceInputs["host"] = args ? args.host : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["port"] = args ? args.port : undefined;
            resourceInputs["ssl"] = args ? args.ssl : undefined;
            resourceInputs["testIntegration"] = args ? args.testIntegration : undefined;
            resourceInputs["createdOrUpdatedBy"] = undefined /*out*/;
            resourceInputs["createdOrUpdatedTime"] = undefined /*out*/;
            resourceInputs["intgGuid"] = undefined /*out*/;
            resourceInputs["orgLevel"] = undefined /*out*/;
            resourceInputs["typeName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlertChannelSplunk.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlertChannelSplunk resources.
 */
export interface AlertChannelSplunkState {
    /**
     * The Splunk channel name
     */
    channel?: pulumi.Input<string>;
    createdOrUpdatedBy?: pulumi.Input<string>;
    createdOrUpdatedTime?: pulumi.Input<string>;
    /**
     * The state of the external integration
     */
    enabled?: pulumi.Input<boolean>;
    eventData?: pulumi.Input<inputs.AlertChannelSplunkEventData>;
    /**
     * The token you generate when you create a new HEC input
     */
    hecToken?: pulumi.Input<string>;
    /**
     * The hostname of the client from which you're sending data
     */
    host?: pulumi.Input<string>;
    intgGuid?: pulumi.Input<string>;
    /**
     * The integration name
     */
    name?: pulumi.Input<string>;
    orgLevel?: pulumi.Input<boolean>;
    /**
     * The destination port for forwarding events
     */
    port?: pulumi.Input<number>;
    /**
     * Enable or Disable SSL
     */
    ssl?: pulumi.Input<boolean>;
    /**
     * Whether to test the integration of an alert channel upon creation and modification
     */
    testIntegration?: pulumi.Input<boolean>;
    typeName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AlertChannelSplunk resource.
 */
export interface AlertChannelSplunkArgs {
    /**
     * The Splunk channel name
     */
    channel?: pulumi.Input<string>;
    /**
     * The state of the external integration
     */
    enabled?: pulumi.Input<boolean>;
    eventData: pulumi.Input<inputs.AlertChannelSplunkEventData>;
    /**
     * The token you generate when you create a new HEC input
     */
    hecToken: pulumi.Input<string>;
    /**
     * The hostname of the client from which you're sending data
     */
    host: pulumi.Input<string>;
    /**
     * The integration name
     */
    name?: pulumi.Input<string>;
    /**
     * The destination port for forwarding events
     */
    port: pulumi.Input<number>;
    /**
     * Enable or Disable SSL
     */
    ssl?: pulumi.Input<boolean>;
    /**
     * Whether to test the integration of an alert channel upon creation and modification
     */
    testIntegration?: pulumi.Input<boolean>;
}
