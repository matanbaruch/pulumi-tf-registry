// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class WebfilterFtgdlocalrating extends pulumi.CustomResource {
    /**
     * Get an existing WebfilterFtgdlocalrating resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: WebfilterFtgdlocalratingState, opts?: pulumi.CustomResourceOptions): WebfilterFtgdlocalrating {
        return new WebfilterFtgdlocalrating(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortios:index/webfilterFtgdlocalrating:WebfilterFtgdlocalrating';

    /**
     * Returns true if the given object is an instance of WebfilterFtgdlocalrating.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is WebfilterFtgdlocalrating {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === WebfilterFtgdlocalrating.__pulumiType;
    }

    public readonly comment!: pulumi.Output<string | undefined>;
    public readonly rating!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly url!: pulumi.Output<string>;
    public readonly vdomparam!: pulumi.Output<string>;

    /**
     * Create a WebfilterFtgdlocalrating resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: WebfilterFtgdlocalratingArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: WebfilterFtgdlocalratingArgs | WebfilterFtgdlocalratingState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as WebfilterFtgdlocalratingState | undefined;
            resourceInputs["comment"] = state ? state.comment : undefined;
            resourceInputs["rating"] = state ? state.rating : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["url"] = state ? state.url : undefined;
            resourceInputs["vdomparam"] = state ? state.vdomparam : undefined;
        } else {
            const args = argsOrState as WebfilterFtgdlocalratingArgs | undefined;
            if ((!args || args.rating === undefined) && !opts.urn) {
                throw new Error("Missing required property 'rating'");
            }
            resourceInputs["comment"] = args ? args.comment : undefined;
            resourceInputs["rating"] = args ? args.rating : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["url"] = args ? args.url : undefined;
            resourceInputs["vdomparam"] = args ? args.vdomparam : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(WebfilterFtgdlocalrating.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering WebfilterFtgdlocalrating resources.
 */
export interface WebfilterFtgdlocalratingState {
    comment?: pulumi.Input<string>;
    rating?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a WebfilterFtgdlocalrating resource.
 */
export interface WebfilterFtgdlocalratingArgs {
    comment?: pulumi.Input<string>;
    rating: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    url?: pulumi.Input<string>;
    vdomparam?: pulumi.Input<string>;
}
