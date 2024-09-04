// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Vpc extends pulumi.CustomResource {
    /**
     * Get an existing Vpc resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VpcState, opts?: pulumi.CustomResourceOptions): Vpc {
        return new Vpc(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ucloud:index/vpc:Vpc';

    /**
     * Returns true if the given object is an instance of Vpc.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Vpc {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Vpc.__pulumiType;
    }

    public readonly cidrBlocks!: pulumi.Output<string[]>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly name!: pulumi.Output<string>;
    public /*out*/ readonly networkInfos!: pulumi.Output<outputs.VpcNetworkInfo[]>;
    public readonly remark!: pulumi.Output<string>;
    public readonly tag!: pulumi.Output<string | undefined>;
    public /*out*/ readonly updateTime!: pulumi.Output<string>;

    /**
     * Create a Vpc resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VpcArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VpcArgs | VpcState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VpcState | undefined;
            resourceInputs["cidrBlocks"] = state ? state.cidrBlocks : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkInfos"] = state ? state.networkInfos : undefined;
            resourceInputs["remark"] = state ? state.remark : undefined;
            resourceInputs["tag"] = state ? state.tag : undefined;
            resourceInputs["updateTime"] = state ? state.updateTime : undefined;
        } else {
            const args = argsOrState as VpcArgs | undefined;
            if ((!args || args.cidrBlocks === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cidrBlocks'");
            }
            resourceInputs["cidrBlocks"] = args ? args.cidrBlocks : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["remark"] = args ? args.remark : undefined;
            resourceInputs["tag"] = args ? args.tag : undefined;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["networkInfos"] = undefined /*out*/;
            resourceInputs["updateTime"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Vpc.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Vpc resources.
 */
export interface VpcState {
    cidrBlocks?: pulumi.Input<pulumi.Input<string>[]>;
    createTime?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    networkInfos?: pulumi.Input<pulumi.Input<inputs.VpcNetworkInfo>[]>;
    remark?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
    updateTime?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Vpc resource.
 */
export interface VpcArgs {
    cidrBlocks: pulumi.Input<pulumi.Input<string>[]>;
    name?: pulumi.Input<string>;
    remark?: pulumi.Input<string>;
    tag?: pulumi.Input<string>;
}
