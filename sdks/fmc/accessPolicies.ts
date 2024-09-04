// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class AccessPolicies extends pulumi.CustomResource {
    /**
     * Get an existing AccessPolicies resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AccessPoliciesState, opts?: pulumi.CustomResourceOptions): AccessPolicies {
        return new AccessPolicies(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fmc:index/accessPolicies:AccessPolicies';

    /**
     * Returns true if the given object is an instance of AccessPolicies.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is AccessPolicies {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === AccessPolicies.__pulumiType;
    }

    /**
     * Default action for this resource, "BLOCK", "TRUST", "PERMIT", "NETWORK_DISCOVERY" or "INHERIT_FROM_PARENT".
     */
    public readonly defaultAction!: pulumi.Output<string | undefined>;
    /**
     * Default action base policy ID to inherit from for this resource
     */
    public readonly defaultActionBaseIntrusionPolicyId!: pulumi.Output<string | undefined>;
    /**
     * The ID of default action of this resource
     */
    public /*out*/ readonly defaultActionId!: pulumi.Output<string>;
    /**
     * Enable logging at the beginning of the connection for this resource, "true" or "false
     */
    public readonly defaultActionLogBegin!: pulumi.Output<boolean | undefined>;
    /**
     * Enable logging at the end of the connection for this resource, "true" or "false"
     */
    public readonly defaultActionLogEnd!: pulumi.Output<boolean | undefined>;
    /**
     * Enable sending events to FMC for this resource, "true" or "false"
     */
    public readonly defaultActionSendEventsToFmc!: pulumi.Output<boolean | undefined>;
    /**
     * Syslog configuration ID for this resource
     */
    public readonly defaultActionSyslogConfigId!: pulumi.Output<string | undefined>;
    /**
     * The type of default action of this resource
     */
    public /*out*/ readonly defaultActionType!: pulumi.Output<string>;
    /**
     * The description of this resource
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * The name of this resource
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The type of this resource
     */
    public /*out*/ readonly type!: pulumi.Output<string>;

    /**
     * Create a AccessPolicies resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AccessPoliciesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AccessPoliciesArgs | AccessPoliciesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AccessPoliciesState | undefined;
            resourceInputs["defaultAction"] = state ? state.defaultAction : undefined;
            resourceInputs["defaultActionBaseIntrusionPolicyId"] = state ? state.defaultActionBaseIntrusionPolicyId : undefined;
            resourceInputs["defaultActionId"] = state ? state.defaultActionId : undefined;
            resourceInputs["defaultActionLogBegin"] = state ? state.defaultActionLogBegin : undefined;
            resourceInputs["defaultActionLogEnd"] = state ? state.defaultActionLogEnd : undefined;
            resourceInputs["defaultActionSendEventsToFmc"] = state ? state.defaultActionSendEventsToFmc : undefined;
            resourceInputs["defaultActionSyslogConfigId"] = state ? state.defaultActionSyslogConfigId : undefined;
            resourceInputs["defaultActionType"] = state ? state.defaultActionType : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as AccessPoliciesArgs | undefined;
            resourceInputs["defaultAction"] = args ? args.defaultAction : undefined;
            resourceInputs["defaultActionBaseIntrusionPolicyId"] = args ? args.defaultActionBaseIntrusionPolicyId : undefined;
            resourceInputs["defaultActionLogBegin"] = args ? args.defaultActionLogBegin : undefined;
            resourceInputs["defaultActionLogEnd"] = args ? args.defaultActionLogEnd : undefined;
            resourceInputs["defaultActionSendEventsToFmc"] = args ? args.defaultActionSendEventsToFmc : undefined;
            resourceInputs["defaultActionSyslogConfigId"] = args ? args.defaultActionSyslogConfigId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["defaultActionId"] = undefined /*out*/;
            resourceInputs["defaultActionType"] = undefined /*out*/;
            resourceInputs["type"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(AccessPolicies.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering AccessPolicies resources.
 */
export interface AccessPoliciesState {
    /**
     * Default action for this resource, "BLOCK", "TRUST", "PERMIT", "NETWORK_DISCOVERY" or "INHERIT_FROM_PARENT".
     */
    defaultAction?: pulumi.Input<string>;
    /**
     * Default action base policy ID to inherit from for this resource
     */
    defaultActionBaseIntrusionPolicyId?: pulumi.Input<string>;
    /**
     * The ID of default action of this resource
     */
    defaultActionId?: pulumi.Input<string>;
    /**
     * Enable logging at the beginning of the connection for this resource, "true" or "false
     */
    defaultActionLogBegin?: pulumi.Input<boolean>;
    /**
     * Enable logging at the end of the connection for this resource, "true" or "false"
     */
    defaultActionLogEnd?: pulumi.Input<boolean>;
    /**
     * Enable sending events to FMC for this resource, "true" or "false"
     */
    defaultActionSendEventsToFmc?: pulumi.Input<boolean>;
    /**
     * Syslog configuration ID for this resource
     */
    defaultActionSyslogConfigId?: pulumi.Input<string>;
    /**
     * The type of default action of this resource
     */
    defaultActionType?: pulumi.Input<string>;
    /**
     * The description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The name of this resource
     */
    name?: pulumi.Input<string>;
    /**
     * The type of this resource
     */
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a AccessPolicies resource.
 */
export interface AccessPoliciesArgs {
    /**
     * Default action for this resource, "BLOCK", "TRUST", "PERMIT", "NETWORK_DISCOVERY" or "INHERIT_FROM_PARENT".
     */
    defaultAction?: pulumi.Input<string>;
    /**
     * Default action base policy ID to inherit from for this resource
     */
    defaultActionBaseIntrusionPolicyId?: pulumi.Input<string>;
    /**
     * Enable logging at the beginning of the connection for this resource, "true" or "false
     */
    defaultActionLogBegin?: pulumi.Input<boolean>;
    /**
     * Enable logging at the end of the connection for this resource, "true" or "false"
     */
    defaultActionLogEnd?: pulumi.Input<boolean>;
    /**
     * Enable sending events to FMC for this resource, "true" or "false"
     */
    defaultActionSendEventsToFmc?: pulumi.Input<boolean>;
    /**
     * Syslog configuration ID for this resource
     */
    defaultActionSyslogConfigId?: pulumi.Input<string>;
    /**
     * The description of this resource
     */
    description?: pulumi.Input<string>;
    /**
     * The name of this resource
     */
    name?: pulumi.Input<string>;
}
