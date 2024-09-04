// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemFeatureProfile extends pulumi.CustomResource {
    /**
     * Get an existing SystemFeatureProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemFeatureProfileState, opts?: pulumi.CustomResourceOptions): SystemFeatureProfile {
        return new SystemFeatureProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/systemFeatureProfile:SystemFeatureProfile';

    /**
     * Returns true if the given object is an instance of SystemFeatureProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemFeatureProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemFeatureProfile.__pulumiType;
    }

    /**
     * Description
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * The name of the system feature profile
     */
    public readonly name!: pulumi.Output<string>;

    /**
     * Create a SystemFeatureProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: SystemFeatureProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemFeatureProfileArgs | SystemFeatureProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemFeatureProfileState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
        } else {
            const args = argsOrState as SystemFeatureProfileArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemFeatureProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemFeatureProfile resources.
 */
export interface SystemFeatureProfileState {
    /**
     * Description
     */
    description?: pulumi.Input<string>;
    /**
     * The name of the system feature profile
     */
    name?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemFeatureProfile resource.
 */
export interface SystemFeatureProfileArgs {
    /**
     * Description
     */
    description: pulumi.Input<string>;
    /**
     * The name of the system feature profile
     */
    name?: pulumi.Input<string>;
}
