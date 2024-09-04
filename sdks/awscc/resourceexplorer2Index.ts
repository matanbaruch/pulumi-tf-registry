// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Resourceexplorer2Index extends pulumi.CustomResource {
    /**
     * Get an existing Resourceexplorer2Index resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Resourceexplorer2IndexState, opts?: pulumi.CustomResourceOptions): Resourceexplorer2Index {
        return new Resourceexplorer2Index(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'awscc:index/resourceexplorer2Index:Resourceexplorer2Index';

    /**
     * Returns true if the given object is an instance of Resourceexplorer2Index.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Resourceexplorer2Index {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Resourceexplorer2Index.__pulumiType;
    }

    public /*out*/ readonly arn!: pulumi.Output<string>;
    public /*out*/ readonly indexState!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<{[key: string]: string}>;
    public readonly type!: pulumi.Output<string>;

    /**
     * Create a Resourceexplorer2Index resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Resourceexplorer2IndexArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Resourceexplorer2IndexArgs | Resourceexplorer2IndexState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Resourceexplorer2IndexState | undefined;
            resourceInputs["arn"] = state ? state.arn : undefined;
            resourceInputs["indexState"] = state ? state.indexState : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
        } else {
            const args = argsOrState as Resourceexplorer2IndexArgs | undefined;
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["tags"] = args ? args.tags : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["arn"] = undefined /*out*/;
            resourceInputs["indexState"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Resourceexplorer2Index.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Resourceexplorer2Index resources.
 */
export interface Resourceexplorer2IndexState {
    arn?: pulumi.Input<string>;
    indexState?: pulumi.Input<string>;
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Resourceexplorer2Index resource.
 */
export interface Resourceexplorer2IndexArgs {
    tags?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    type: pulumi.Input<string>;
}
