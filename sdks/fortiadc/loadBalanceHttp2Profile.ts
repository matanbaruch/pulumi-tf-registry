// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoadBalanceHttp2Profile extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalanceHttp2Profile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalanceHttp2ProfileState, opts?: pulumi.CustomResourceOptions): LoadBalanceHttp2Profile {
        return new LoadBalanceHttp2Profile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/loadBalanceHttp2Profile:LoadBalanceHttp2Profile';

    /**
     * Returns true if the given object is an instance of LoadBalanceHttp2Profile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalanceHttp2Profile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalanceHttp2Profile.__pulumiType;
    }

    public readonly headerTableSize!: pulumi.Output<string>;
    public readonly maxConcurrentStream!: pulumi.Output<string>;
    public readonly maxFrameSize!: pulumi.Output<string>;
    public readonly maxHeaderListSize!: pulumi.Output<string>;
    public readonly maxReceiveWindow!: pulumi.Output<string>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly priorityMode!: pulumi.Output<string>;
    public readonly sslConstraint!: pulumi.Output<string>;
    public readonly upgradeMode!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a LoadBalanceHttp2Profile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalanceHttp2ProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalanceHttp2ProfileArgs | LoadBalanceHttp2ProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadBalanceHttp2ProfileState | undefined;
            resourceInputs["headerTableSize"] = state ? state.headerTableSize : undefined;
            resourceInputs["maxConcurrentStream"] = state ? state.maxConcurrentStream : undefined;
            resourceInputs["maxFrameSize"] = state ? state.maxFrameSize : undefined;
            resourceInputs["maxHeaderListSize"] = state ? state.maxHeaderListSize : undefined;
            resourceInputs["maxReceiveWindow"] = state ? state.maxReceiveWindow : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["priorityMode"] = state ? state.priorityMode : undefined;
            resourceInputs["sslConstraint"] = state ? state.sslConstraint : undefined;
            resourceInputs["upgradeMode"] = state ? state.upgradeMode : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as LoadBalanceHttp2ProfileArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            resourceInputs["headerTableSize"] = args ? args.headerTableSize : undefined;
            resourceInputs["maxConcurrentStream"] = args ? args.maxConcurrentStream : undefined;
            resourceInputs["maxFrameSize"] = args ? args.maxFrameSize : undefined;
            resourceInputs["maxHeaderListSize"] = args ? args.maxHeaderListSize : undefined;
            resourceInputs["maxReceiveWindow"] = args ? args.maxReceiveWindow : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["priorityMode"] = args ? args.priorityMode : undefined;
            resourceInputs["sslConstraint"] = args ? args.sslConstraint : undefined;
            resourceInputs["upgradeMode"] = args ? args.upgradeMode : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoadBalanceHttp2Profile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoadBalanceHttp2Profile resources.
 */
export interface LoadBalanceHttp2ProfileState {
    headerTableSize?: pulumi.Input<string>;
    maxConcurrentStream?: pulumi.Input<string>;
    maxFrameSize?: pulumi.Input<string>;
    maxHeaderListSize?: pulumi.Input<string>;
    maxReceiveWindow?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    priorityMode?: pulumi.Input<string>;
    sslConstraint?: pulumi.Input<string>;
    upgradeMode?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadBalanceHttp2Profile resource.
 */
export interface LoadBalanceHttp2ProfileArgs {
    headerTableSize?: pulumi.Input<string>;
    maxConcurrentStream?: pulumi.Input<string>;
    maxFrameSize?: pulumi.Input<string>;
    maxHeaderListSize?: pulumi.Input<string>;
    maxReceiveWindow?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    priorityMode?: pulumi.Input<string>;
    sslConstraint?: pulumi.Input<string>;
    upgradeMode?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
