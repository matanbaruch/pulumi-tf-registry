// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class ApplicationCertificate extends pulumi.CustomResource {
    /**
     * Get an existing ApplicationCertificate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ApplicationCertificateState, opts?: pulumi.CustomResourceOptions): ApplicationCertificate {
        return new ApplicationCertificate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ome:index/applicationCertificate:ApplicationCertificate';

    /**
     * Returns true if the given object is an instance of ApplicationCertificate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is ApplicationCertificate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === ApplicationCertificate.__pulumiType;
    }

    public readonly certificateBase64!: pulumi.Output<string>;

    /**
     * Create a ApplicationCertificate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ApplicationCertificateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ApplicationCertificateArgs | ApplicationCertificateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ApplicationCertificateState | undefined;
            resourceInputs["certificateBase64"] = state ? state.certificateBase64 : undefined;
        } else {
            const args = argsOrState as ApplicationCertificateArgs | undefined;
            if ((!args || args.certificateBase64 === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateBase64'");
            }
            resourceInputs["certificateBase64"] = args ? args.certificateBase64 : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(ApplicationCertificate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering ApplicationCertificate resources.
 */
export interface ApplicationCertificateState {
    certificateBase64?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a ApplicationCertificate resource.
 */
export interface ApplicationCertificateArgs {
    certificateBase64: pulumi.Input<string>;
}
