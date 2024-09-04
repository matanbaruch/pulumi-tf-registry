// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VpcSecurityPolicy extends pulumi.CustomResource {
    /**
     * Get an existing VpcSecurityPolicy resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcSecurityPolicyState, opts?: pulumi.CustomResourceOptions): VpcSecurityPolicy {
        return new VpcSecurityPolicy(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'nsxt-virtual-private-cloud:index/vpcSecurityPolicy:VpcSecurityPolicy';

    /**
     * Returns true if the given object is an instance of VpcSecurityPolicy.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VpcSecurityPolicy {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VpcSecurityPolicy.__pulumiType;
    }

    public /*out*/ readonly _revision!: pulumi.Output<number>;
    public readonly applicationConnectivityStrategies!: pulumi.Output<outputs.VpcSecurityPolicyApplicationConnectivityStrategy[] | undefined>;
    public readonly category!: pulumi.Output<string>;
    public readonly comments!: pulumi.Output<string | undefined>;
    public readonly connectivityPreference!: pulumi.Output<string | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly connectivityStrategy!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly displayName!: pulumi.Output<string>;
    public readonly locked!: pulumi.Output<boolean | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly loggingEnabled!: pulumi.Output<boolean | undefined>;
    public readonly nsxId!: pulumi.Output<string>;
    public /*out*/ readonly path!: pulumi.Output<string>;
    public readonly resourceType!: pulumi.Output<string>;
    public readonly schedulerPath!: pulumi.Output<string | undefined>;
    public readonly scopes!: pulumi.Output<string[]>;
    public readonly sequenceNumber!: pulumi.Output<number>;
    public readonly stateful!: pulumi.Output<boolean>;
    public readonly tags!: pulumi.Output<outputs.VpcSecurityPolicyTag[] | undefined>;
    public readonly tcpStrict!: pulumi.Output<boolean>;

    /**
     * Create a VpcSecurityPolicy resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcSecurityPolicyArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcSecurityPolicyArgs | VpcSecurityPolicyState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcSecurityPolicyState | undefined;
            resourceInputs["_revision"] = state ? state._revision : undefined;
            resourceInputs["applicationConnectivityStrategies"] = state ? state.applicationConnectivityStrategies : undefined;
            resourceInputs["category"] = state ? state.category : undefined;
            resourceInputs["comments"] = state ? state.comments : undefined;
            resourceInputs["connectivityPreference"] = state ? state.connectivityPreference : undefined;
            resourceInputs["connectivityStrategy"] = state ? state.connectivityStrategy : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["displayName"] = state ? state.displayName : undefined;
            resourceInputs["locked"] = state ? state.locked : undefined;
            resourceInputs["loggingEnabled"] = state ? state.loggingEnabled : undefined;
            resourceInputs["nsxId"] = state ? state.nsxId : undefined;
            resourceInputs["path"] = state ? state.path : undefined;
            resourceInputs["resourceType"] = state ? state.resourceType : undefined;
            resourceInputs["schedulerPath"] = state ? state.schedulerPath : undefined;
            resourceInputs["scopes"] = state ? state.scopes : undefined;
            resourceInputs["sequenceNumber"] = state ? state.sequenceNumber : undefined;
            resourceInputs["stateful"] = state ? state.stateful : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["tcpStrict"] = state ? state.tcpStrict : undefined;
        } else {
            const args = argsOrState as VpcSecurityPolicyArgs | undefined;
            if ((!args || args.nsxId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nsxId'");
            }
            if ((!args || args.sequenceNumber === undefined) && !opts.urn) {
                throw new Error("Missing required property 'sequenceNumber'");
            }
            resourceInputs["applicationConnectivityStrategies"] = args ? args.applicationConnectivityStrategies : undefined;
            resourceInputs["category"] = args ? args.category : undefined;
            resourceInputs["comments"] = args ? args.comments : undefined;
            resourceInputs["connectivityPreference"] = args ? args.connectivityPreference : undefined;
            resourceInputs["connectivityStrategy"] = args ? args.connectivityStrategy : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["displayName"] = args ? args.displayName : undefined;
            resourceInputs["locked"] = args ? args.locked : undefined;
            resourceInputs["loggingEnabled"] = args ? args.loggingEnabled : undefined;
            resourceInputs["nsxId"] = args ? args.nsxId : undefined;
            resourceInputs["resourceType"] = args ? args.resourceType : undefined;
            resourceInputs["schedulerPath"] = args ? args.schedulerPath : undefined;
            resourceInputs["scopes"] = args ? args.scopes : undefined;
            resourceInputs["sequenceNumber"] = args ? args.sequenceNumber : undefined;
            resourceInputs["stateful"] = args ? args.stateful : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["tcpStrict"] = args ? args.tcpStrict : undefined;
            resourceInputs["_revision"] = undefined /*out*/;
            resourceInputs["path"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VpcSecurityPolicy.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VpcSecurityPolicy resources.
 */
export interface VpcSecurityPolicyState {
    _revision?: pulumi.Input<number>;
    applicationConnectivityStrategies?: pulumi.Input<pulumi.Input<inputs.VpcSecurityPolicyApplicationConnectivityStrategy>[]>;
    category?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    connectivityPreference?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    connectivityStrategy?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    locked?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    loggingEnabled?: pulumi.Input<boolean>;
    nsxId?: pulumi.Input<string>;
    path?: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
    schedulerPath?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    sequenceNumber?: pulumi.Input<number>;
    stateful?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<inputs.VpcSecurityPolicyTag>[]>;
    tcpStrict?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a VpcSecurityPolicy resource.
 */
export interface VpcSecurityPolicyArgs {
    applicationConnectivityStrategies?: pulumi.Input<pulumi.Input<inputs.VpcSecurityPolicyApplicationConnectivityStrategy>[]>;
    category?: pulumi.Input<string>;
    comments?: pulumi.Input<string>;
    connectivityPreference?: pulumi.Input<string>;
    /**
     * @deprecated Deprecated
     */
    connectivityStrategy?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    displayName?: pulumi.Input<string>;
    locked?: pulumi.Input<boolean>;
    /**
     * @deprecated Deprecated
     */
    loggingEnabled?: pulumi.Input<boolean>;
    nsxId: pulumi.Input<string>;
    resourceType?: pulumi.Input<string>;
    schedulerPath?: pulumi.Input<string>;
    scopes?: pulumi.Input<pulumi.Input<string>[]>;
    sequenceNumber: pulumi.Input<number>;
    stateful?: pulumi.Input<boolean>;
    tags?: pulumi.Input<pulumi.Input<inputs.VpcSecurityPolicyTag>[]>;
    tcpStrict?: pulumi.Input<boolean>;
}
