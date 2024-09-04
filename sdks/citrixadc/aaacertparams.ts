// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class Aaacertparams extends pulumi.CustomResource {
    /**
     * Get an existing Aaacertparams resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: AaacertparamsState, opts?: pulumi.CustomResourceOptions): Aaacertparams {
        return new Aaacertparams(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'citrixadc:index/aaacertparams:Aaacertparams';

    /**
     * Returns true if the given object is an instance of Aaacertparams.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Aaacertparams {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Aaacertparams.__pulumiType;
    }

    public readonly defaultauthenticationgroup!: pulumi.Output<string>;
    public readonly groupnamefield!: pulumi.Output<string>;
    public readonly usernamefield!: pulumi.Output<string>;

    /**
     * Create a Aaacertparams resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: AaacertparamsArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: AaacertparamsArgs | AaacertparamsState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as AaacertparamsState | undefined;
            resourceInputs["defaultauthenticationgroup"] = state ? state.defaultauthenticationgroup : undefined;
            resourceInputs["groupnamefield"] = state ? state.groupnamefield : undefined;
            resourceInputs["usernamefield"] = state ? state.usernamefield : undefined;
        } else {
            const args = argsOrState as AaacertparamsArgs | undefined;
            resourceInputs["defaultauthenticationgroup"] = args ? args.defaultauthenticationgroup : undefined;
            resourceInputs["groupnamefield"] = args ? args.groupnamefield : undefined;
            resourceInputs["usernamefield"] = args ? args.usernamefield : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(Aaacertparams.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Aaacertparams resources.
 */
export interface AaacertparamsState {
    defaultauthenticationgroup?: pulumi.Input<string>;
    groupnamefield?: pulumi.Input<string>;
    usernamefield?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Aaacertparams resource.
 */
export interface AaacertparamsArgs {
    defaultauthenticationgroup?: pulumi.Input<string>;
    groupnamefield?: pulumi.Input<string>;
    usernamefield?: pulumi.Input<string>;
}
