// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class LicenseRenewauth extends pulumi.CustomResource {
    /**
     * Get an existing LicenseRenewauth resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: LicenseRenewauthState, opts?: pulumi.CustomResourceOptions): LicenseRenewauth {
        return new LicenseRenewauth(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ciscoasa:index/licenseRenewauth:LicenseRenewauth';

    /**
     * Returns true if the given object is an instance of LicenseRenewauth.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is LicenseRenewauth {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === LicenseRenewauth.__pulumiType;
    }


    /**
     * Create a LicenseRenewauth resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: LicenseRenewauthArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: LicenseRenewauthArgs | LicenseRenewauthState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as LicenseRenewauthState | undefined;
        } else {
            const args = argsOrState as LicenseRenewauthArgs | undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(LicenseRenewauth.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering LicenseRenewauth resources.
 */
export interface LicenseRenewauthState {
}

/**
 * The set of arguments for constructing a LicenseRenewauth resource.
 */
export interface LicenseRenewauthArgs {
}
