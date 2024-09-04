// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class NetworkArea extends pulumi.CustomResource {
    /**
     * Get an existing NetworkArea resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NetworkAreaState, opts?: pulumi.CustomResourceOptions): NetworkArea {
        return new NetworkArea(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'consul:index/networkArea:NetworkArea';

    /**
     * Returns true if the given object is an instance of NetworkArea.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NetworkArea {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NetworkArea.__pulumiType;
    }

    public readonly datacenter!: pulumi.Output<string>;
    public readonly peerDatacenter!: pulumi.Output<string>;
    public readonly retryJoins!: pulumi.Output<string[] | undefined>;
    /**
     * @deprecated Deprecated
     */
    public readonly token!: pulumi.Output<string | undefined>;
    public readonly useTls!: pulumi.Output<boolean | undefined>;

    /**
     * Create a NetworkArea resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: NetworkAreaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NetworkAreaArgs | NetworkAreaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NetworkAreaState | undefined;
            resourceInputs["datacenter"] = state ? state.datacenter : undefined;
            resourceInputs["peerDatacenter"] = state ? state.peerDatacenter : undefined;
            resourceInputs["retryJoins"] = state ? state.retryJoins : undefined;
            resourceInputs["token"] = state ? state.token : undefined;
            resourceInputs["useTls"] = state ? state.useTls : undefined;
        } else {
            const args = argsOrState as NetworkAreaArgs | undefined;
            if ((!args || args.peerDatacenter === undefined) && !opts.urn) {
                throw new Error("Missing required property 'peerDatacenter'");
            }
            resourceInputs["datacenter"] = args ? args.datacenter : undefined;
            resourceInputs["peerDatacenter"] = args ? args.peerDatacenter : undefined;
            resourceInputs["retryJoins"] = args ? args.retryJoins : undefined;
            resourceInputs["token"] = args?.token ? pulumi.secret(args.token) : undefined;
            resourceInputs["useTls"] = args ? args.useTls : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["token"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NetworkArea.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NetworkArea resources.
 */
export interface NetworkAreaState {
    datacenter?: pulumi.Input<string>;
    peerDatacenter?: pulumi.Input<string>;
    retryJoins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated Deprecated
     */
    token?: pulumi.Input<string>;
    useTls?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a NetworkArea resource.
 */
export interface NetworkAreaArgs {
    datacenter?: pulumi.Input<string>;
    peerDatacenter: pulumi.Input<string>;
    retryJoins?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * @deprecated Deprecated
     */
    token?: pulumi.Input<string>;
    useTls?: pulumi.Input<boolean>;
}
