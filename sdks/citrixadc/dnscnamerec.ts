// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Dnscnamerec extends pulumi.CustomResource {
    /**
     * Get an existing Dnscnamerec resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DnscnamerecState, opts?: pulumi.CustomResourceOptions): Dnscnamerec {
        return new Dnscnamerec(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/dnscnamerec:Dnscnamerec';

    /**
     * Returns true if the given object is an instance of Dnscnamerec.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Dnscnamerec {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Dnscnamerec.__pulumiType;
    }

    public readonly aliasname!: pulumi.Output<string>;
    public readonly canonicalname!: pulumi.Output<string>;
    public readonly ecssubnet!: pulumi.Output<string | undefined>;
    public readonly nodeid!: pulumi.Output<number | undefined>;
    public readonly ttl!: pulumi.Output<number | undefined>;
    public readonly type!: pulumi.Output<string | undefined>;

    /**
     * Create a Dnscnamerec resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DnscnamerecArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DnscnamerecArgs | DnscnamerecState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DnscnamerecState | undefined;
            resourceInputs["aliasname"] = state ? state.aliasname : undefined;
            resourceInputs["canonicalname"] = state ? state.canonicalname : undefined;
            resourceInputs["ecssubnet"] = state ? state.ecssubnet : undefined;
            resourceInputs["nodeid"] = state ? state.nodeid : undefined;
            resourceInputs["ttl"] = state ? state.ttl : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as DnscnamerecArgs | undefined;
            if ((!args || args.aliasname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'aliasname'");
            }
            if ((!args || args.canonicalname === undefined) && !opts.urn) {
                throw new Error("Missing required property 'canonicalname'");
            }
            resourceInputs["aliasname"] = args ? args.aliasname : undefined;
            resourceInputs["canonicalname"] = args ? args.canonicalname : undefined;
            resourceInputs["ecssubnet"] = args ? args.ecssubnet : undefined;
            resourceInputs["nodeid"] = args ? args.nodeid : undefined;
            resourceInputs["ttl"] = args ? args.ttl : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Dnscnamerec.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Dnscnamerec resources.
 */
export interface DnscnamerecState {
    aliasname?: pulumi.Input<string>;
    canonicalname?: pulumi.Input<string>;
    ecssubnet?: pulumi.Input<string>;
    nodeid?: pulumi.Input<number>;
    ttl?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Dnscnamerec resource.
 */
export interface DnscnamerecArgs {
    aliasname: pulumi.Input<string>;
    canonicalname: pulumi.Input<string>;
    ecssubnet?: pulumi.Input<string>;
    nodeid?: pulumi.Input<number>;
    ttl?: pulumi.Input<number>;
    type?: pulumi.Input<string>;
}
