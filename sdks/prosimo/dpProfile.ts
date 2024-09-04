// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class DpProfile extends pulumi.CustomResource {
    /**
     * Get an existing DpProfile resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: DpProfileState, opts?: pulumi.CustomResourceOptions): DpProfile {
        return new DpProfile(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'prosimo:index/dpProfile:DpProfile';

    /**
     * Returns true if the given object is an instance of DpProfile.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is DpProfile {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === DpProfile.__pulumiType;
    }

    public readonly inprofileLists!: pulumi.Output<outputs.DpProfileInprofileList[]>;

    /**
     * Create a DpProfile resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: DpProfileArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: DpProfileArgs | DpProfileState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as DpProfileState | undefined;
            resourceInputs["inprofileLists"] = state ? state.inprofileLists : undefined;
        } else {
            const args = argsOrState as DpProfileArgs | undefined;
            if ((!args || args.inprofileLists === undefined) && !opts.urn) {
                throw new Error("Missing required property 'inprofileLists'");
            }
            resourceInputs["inprofileLists"] = args ? args.inprofileLists : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(DpProfile.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering DpProfile resources.
 */
export interface DpProfileState {
    inprofileLists?: pulumi.Input<pulumi.Input<inputs.DpProfileInprofileList>[]>;
}

/**
 * The set of arguments for constructing a DpProfile resource.
 */
export interface DpProfileArgs {
    inprofileLists: pulumi.Input<pulumi.Input<inputs.DpProfileInprofileList>[]>;
}
