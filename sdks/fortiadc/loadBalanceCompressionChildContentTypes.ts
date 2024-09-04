// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LoadBalanceCompressionChildContentTypes extends pulumi.CustomResource {
    /**
     * Get an existing LoadBalanceCompressionChildContentTypes resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LoadBalanceCompressionChildContentTypesState, opts?: pulumi.CustomResourceOptions): LoadBalanceCompressionChildContentTypes {
        return new LoadBalanceCompressionChildContentTypes(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortiadc:index/loadBalanceCompressionChildContentTypes:LoadBalanceCompressionChildContentTypes';

    /**
     * Returns true if the given object is an instance of LoadBalanceCompressionChildContentTypes.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LoadBalanceCompressionChildContentTypes {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LoadBalanceCompressionChildContentTypes.__pulumiType;
    }

    public readonly contentType!: pulumi.Output<string>;
    public readonly customContentType!: pulumi.Output<string>;
    public readonly mkey!: pulumi.Output<string>;
    public readonly pkey!: pulumi.Output<string>;
    public readonly vdom!: pulumi.Output<string | undefined>;

    /**
     * Create a LoadBalanceCompressionChildContentTypes resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: LoadBalanceCompressionChildContentTypesArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LoadBalanceCompressionChildContentTypesArgs | LoadBalanceCompressionChildContentTypesState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LoadBalanceCompressionChildContentTypesState | undefined;
            resourceInputs["contentType"] = state ? state.contentType : undefined;
            resourceInputs["customContentType"] = state ? state.customContentType : undefined;
            resourceInputs["mkey"] = state ? state.mkey : undefined;
            resourceInputs["pkey"] = state ? state.pkey : undefined;
            resourceInputs["vdom"] = state ? state.vdom : undefined;
        } else {
            const args = argsOrState as LoadBalanceCompressionChildContentTypesArgs | undefined;
            if ((!args || args.mkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mkey'");
            }
            if ((!args || args.pkey === undefined) && !opts.urn) {
                throw new Error("Missing required property 'pkey'");
            }
            resourceInputs["contentType"] = args ? args.contentType : undefined;
            resourceInputs["customContentType"] = args ? args.customContentType : undefined;
            resourceInputs["mkey"] = args ? args.mkey : undefined;
            resourceInputs["pkey"] = args ? args.pkey : undefined;
            resourceInputs["vdom"] = args ? args.vdom : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LoadBalanceCompressionChildContentTypes.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LoadBalanceCompressionChildContentTypes resources.
 */
export interface LoadBalanceCompressionChildContentTypesState {
    contentType?: pulumi.Input<string>;
    customContentType?: pulumi.Input<string>;
    mkey?: pulumi.Input<string>;
    pkey?: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LoadBalanceCompressionChildContentTypes resource.
 */
export interface LoadBalanceCompressionChildContentTypesArgs {
    contentType?: pulumi.Input<string>;
    customContentType?: pulumi.Input<string>;
    mkey: pulumi.Input<string>;
    pkey: pulumi.Input<string>;
    vdom?: pulumi.Input<string>;
}
