// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class AlertChannelGcpPubSub extends pulumi.CustomResource {
    /**
     * Get an existing AlertChannelGcpPubSub resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AlertChannelGcpPubSubState, opts?: pulumi.CustomResourceOptions): AlertChannelGcpPubSub {
        return new AlertChannelGcpPubSub(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'lacework:index/alertChannelGcpPubSub:AlertChannelGcpPubSub';

    /**
     * Returns true if the given object is an instance of AlertChannelGcpPubSub.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AlertChannelGcpPubSub {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AlertChannelGcpPubSub.__pulumiType;
    }

    public /*out*/ readonly createdOrUpdatedBy!: pulumi.Output<string>;
    public /*out*/ readonly createdOrUpdatedTime!: pulumi.Output<string>;
    public readonly credentials!: pulumi.Output<outputs.AlertChannelGcpPubSubCredentials>;
    /**
     * The state of the external integration
     */
    public readonly enabled!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly intgGuid!: pulumi.Output<string>;
    /**
     * Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.
     */
    public readonly issueGrouping!: pulumi.Output<string | undefined>;
    /**
     * The integration name
     */
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly orgLevel!: pulumi.Output<boolean>;
    /**
     * The name of the Google Cloud Project
     */
    public readonly projectId!: pulumi.Output<string>;
    /**
     * Whether to test the integration of an alert channel upon creation and modification
     */
    public readonly testIntegration!: pulumi.Output<boolean | undefined>;
    /**
     * The ID of the Google Cloud Pub/Sub topic
     */
    public readonly topicId!: pulumi.Output<string>;
    public /*out*/ readonly typeName!: pulumi.Output<string>;

    /**
     * Create a AlertChannelGcpPubSub resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: AlertChannelGcpPubSubArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AlertChannelGcpPubSubArgs | AlertChannelGcpPubSubState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AlertChannelGcpPubSubState | undefined;
            resourceInputs["createdOrUpdatedBy"] = state ? state.createdOrUpdatedBy : undefined;
            resourceInputs["createdOrUpdatedTime"] = state ? state.createdOrUpdatedTime : undefined;
            resourceInputs["credentials"] = state ? state.credentials : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["intgGuid"] = state ? state.intgGuid : undefined;
            resourceInputs["issueGrouping"] = state ? state.issueGrouping : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["orgLevel"] = state ? state.orgLevel : undefined;
            resourceInputs["projectId"] = state ? state.projectId : undefined;
            resourceInputs["testIntegration"] = state ? state.testIntegration : undefined;
            resourceInputs["topicId"] = state ? state.topicId : undefined;
            resourceInputs["typeName"] = state ? state.typeName : undefined;
        } else {
            const args = argsOrState as AlertChannelGcpPubSubArgs | undefined;
            if ((!args || args.credentials === undefined) && !opts.urn) {
                throw new Error("Missing required property 'credentials'");
            }
            if ((!args || args.projectId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'projectId'");
            }
            if ((!args || args.topicId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'topicId'");
            }
            resourceInputs["credentials"] = args ? args.credentials : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["issueGrouping"] = args ? args.issueGrouping : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["projectId"] = args ? args.projectId : undefined;
            resourceInputs["testIntegration"] = args ? args.testIntegration : undefined;
            resourceInputs["topicId"] = args ? args.topicId : undefined;
            resourceInputs["createdOrUpdatedBy"] = undefined /*out*/;
            resourceInputs["createdOrUpdatedTime"] = undefined /*out*/;
            resourceInputs["intgGuid"] = undefined /*out*/;
            resourceInputs["orgLevel"] = undefined /*out*/;
            resourceInputs["typeName"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AlertChannelGcpPubSub.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AlertChannelGcpPubSub resources.
 */
export interface AlertChannelGcpPubSubState {
    createdOrUpdatedBy?: pulumi.Input<string>;
    createdOrUpdatedTime?: pulumi.Input<string>;
    credentials?: pulumi.Input<inputs.AlertChannelGcpPubSubCredentials>;
    /**
     * The state of the external integration
     */
    enabled?: pulumi.Input<boolean>;
    intgGuid?: pulumi.Input<string>;
    /**
     * Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.
     */
    issueGrouping?: pulumi.Input<string>;
    /**
     * The integration name
     */
    name?: pulumi.Input<string>;
    orgLevel?: pulumi.Input<boolean>;
    /**
     * The name of the Google Cloud Project
     */
    projectId?: pulumi.Input<string>;
    /**
     * Whether to test the integration of an alert channel upon creation and modification
     */
    testIntegration?: pulumi.Input<boolean>;
    /**
     * The ID of the Google Cloud Pub/Sub topic
     */
    topicId?: pulumi.Input<string>;
    typeName?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AlertChannelGcpPubSub resource.
 */
export interface AlertChannelGcpPubSubArgs {
    credentials: pulumi.Input<inputs.AlertChannelGcpPubSubCredentials>;
    /**
     * The state of the external integration
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * Defines how Lacework compliance events get grouped. Must be one of Events or Resources. Defaults to Events.
     */
    issueGrouping?: pulumi.Input<string>;
    /**
     * The integration name
     */
    name?: pulumi.Input<string>;
    /**
     * The name of the Google Cloud Project
     */
    projectId: pulumi.Input<string>;
    /**
     * Whether to test the integration of an alert channel upon creation and modification
     */
    testIntegration?: pulumi.Input<boolean>;
    /**
     * The ID of the Google Cloud Pub/Sub topic
     */
    topicId: pulumi.Input<string>;
}
