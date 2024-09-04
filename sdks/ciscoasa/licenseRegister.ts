// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LicenseRegister extends pulumi.CustomResource {
    /**
     * Get an existing LicenseRegister resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LicenseRegisterState, opts?: pulumi.CustomResourceOptions): LicenseRegister {
        return new LicenseRegister(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ciscoasa:index/licenseRegister:LicenseRegister';

    /**
     * Returns true if the given object is an instance of LicenseRegister.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LicenseRegister {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LicenseRegister.__pulumiType;
    }

    public readonly force!: pulumi.Output<boolean | undefined>;
    public readonly idToken!: pulumi.Output<string | undefined>;

    /**
     * Create a LicenseRegister resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LicenseRegisterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LicenseRegisterArgs | LicenseRegisterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LicenseRegisterState | undefined;
            resourceInputs["force"] = state ? state.force : undefined;
            resourceInputs["idToken"] = state ? state.idToken : undefined;
        } else {
            const args = argsOrState as LicenseRegisterArgs | undefined;
            resourceInputs["force"] = args ? args.force : undefined;
            resourceInputs["idToken"] = args ? args.idToken : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LicenseRegister.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LicenseRegister resources.
 */
export interface LicenseRegisterState {
    force?: pulumi.Input<boolean>;
    idToken?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a LicenseRegister resource.
 */
export interface LicenseRegisterArgs {
    force?: pulumi.Input<boolean>;
    idToken?: pulumi.Input<string>;
}
