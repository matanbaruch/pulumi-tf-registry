// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SesBlackListDelete extends pulumi.CustomResource {
    /**
     * Get an existing SesBlackListDelete resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SesBlackListDeleteState, opts?: pulumi.CustomResourceOptions): SesBlackListDelete {
        return new SesBlackListDelete(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'tencentcloud:index/sesBlackListDelete:SesBlackListDelete';

    /**
     * Returns true if the given object is an instance of SesBlackListDelete.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SesBlackListDelete {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SesBlackListDelete.__pulumiType;
    }

    /**
     * Email addresses to be unblocklisted.
     */
    public readonly emailAddress!: pulumi.Output<string>;

    /**
     * Create a SesBlackListDelete resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SesBlackListDeleteArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SesBlackListDeleteArgs | SesBlackListDeleteState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SesBlackListDeleteState | undefined;
            resourceInputs["emailAddress"] = state ? state.emailAddress : undefined;
        } else {
            const args = argsOrState as SesBlackListDeleteArgs | undefined;
            if ((!args || args.emailAddress === undefined) && !opts.urn) {
                throw new Error("Missing required property 'emailAddress'");
            }
            resourceInputs["emailAddress"] = args ? args.emailAddress : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SesBlackListDelete.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SesBlackListDelete resources.
 */
export interface SesBlackListDeleteState {
    /**
     * Email addresses to be unblocklisted.
     */
    emailAddress?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SesBlackListDelete resource.
 */
export interface SesBlackListDeleteArgs {
    /**
     * Email addresses to be unblocklisted.
     */
    emailAddress: pulumi.Input<string>;
}
