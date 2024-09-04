// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class CertificateDeployment extends pulumi.CustomResource {
    /**
     * Get an existing CertificateDeployment resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateDeploymentState, opts?: pulumi.CustomResourceOptions): CertificateDeployment {
        return new CertificateDeployment(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'keyfactor:index/certificateDeployment:CertificateDeployment';

    /**
     * Returns true if the given object is an instance of CertificateDeployment.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertificateDeployment {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertificateDeployment.__pulumiType;
    }

    public readonly certificateAlias!: pulumi.Output<string | undefined>;
    /**
     * Keyfactor certificate ID
     */
    public readonly certificateId!: pulumi.Output<number>;
    /**
     * A string containing the GUID for the certificate store to which the certificate should be added.
     */
    public readonly certificateStoreId!: pulumi.Output<string>;
    /**
     * A map of entry parameters to be passed to the deployment job. These will only be used if the orchestrator extension
     * supports them.
     */
    public readonly jobParameters!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly keyPassword!: pulumi.Output<string | undefined>;

    /**
     * Create a CertificateDeployment resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateDeploymentArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateDeploymentArgs | CertificateDeploymentState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CertificateDeploymentState | undefined;
            resourceInputs["certificateAlias"] = state ? state.certificateAlias : undefined;
            resourceInputs["certificateId"] = state ? state.certificateId : undefined;
            resourceInputs["certificateStoreId"] = state ? state.certificateStoreId : undefined;
            resourceInputs["jobParameters"] = state ? state.jobParameters : undefined;
            resourceInputs["keyPassword"] = state ? state.keyPassword : undefined;
        } else {
            const args = argsOrState as CertificateDeploymentArgs | undefined;
            if ((!args || args.certificateId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateId'");
            }
            if ((!args || args.certificateStoreId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'certificateStoreId'");
            }
            resourceInputs["certificateAlias"] = args ? args.certificateAlias : undefined;
            resourceInputs["certificateId"] = args ? args.certificateId : undefined;
            resourceInputs["certificateStoreId"] = args ? args.certificateStoreId : undefined;
            resourceInputs["jobParameters"] = args ? args.jobParameters : undefined;
            resourceInputs["keyPassword"] = args?.keyPassword ? pulumi.secret(args.keyPassword) : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["keyPassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(CertificateDeployment.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CertificateDeployment resources.
 */
export interface CertificateDeploymentState {
    certificateAlias?: pulumi.Input<string>;
    /**
     * Keyfactor certificate ID
     */
    certificateId?: pulumi.Input<number>;
    /**
     * A string containing the GUID for the certificate store to which the certificate should be added.
     */
    certificateStoreId?: pulumi.Input<string>;
    /**
     * A map of entry parameters to be passed to the deployment job. These will only be used if the orchestrator extension
     * supports them.
     */
    jobParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    keyPassword?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a CertificateDeployment resource.
 */
export interface CertificateDeploymentArgs {
    certificateAlias?: pulumi.Input<string>;
    /**
     * Keyfactor certificate ID
     */
    certificateId: pulumi.Input<number>;
    /**
     * A string containing the GUID for the certificate store to which the certificate should be added.
     */
    certificateStoreId: pulumi.Input<string>;
    /**
     * A map of entry parameters to be passed to the deployment job. These will only be used if the orchestrator extension
     * supports them.
     */
    jobParameters?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    keyPassword?: pulumi.Input<string>;
}
