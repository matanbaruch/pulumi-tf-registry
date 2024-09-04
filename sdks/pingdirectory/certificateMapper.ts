// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CertificateMapper extends pulumi.CustomResource {
    /**
     * Get an existing CertificateMapper resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CertificateMapperState, opts?: pulumi.CustomResourceOptions): CertificateMapper {
        return new CertificateMapper(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'pingdirectory:index/certificateMapper:CertificateMapper';

    /**
     * Returns true if the given object is an instance of CertificateMapper.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CertificateMapper {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CertificateMapper.__pulumiType;
    }

    /**
     * A description for this Certificate Mapper
     */
    public readonly description!: pulumi.Output<string | undefined>;
    /**
     * Indicates whether the Certificate Mapper is enabled.
     */
    public readonly enabled!: pulumi.Output<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Certificate Mapper. Each configuration property
     * should be given in the form 'name=value'.
     */
    public readonly extensionArguments!: pulumi.Output<string[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Certificate Mapper.
     */
    public readonly extensionClass!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name of the digest algorithm to compute the fingerprint of client certificates.
     */
    public readonly fingerprintAlgorithm!: pulumi.Output<string | undefined>;
    /**
     * Specifies the attribute in which to look for the fingerprint.
     */
    public readonly fingerprintAttribute!: pulumi.Output<string>;
    /**
     * Name of this config object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly notifications!: pulumi.Output<string[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    public /*out*/ readonly requiredActions!: pulumi.Output<outputs.CertificateMapperRequiredAction[]>;
    /**
     * The set of arguments used to customize the behavior for the Scripted Certificate Mapper. Each configuration property
     * should be given in the form 'name=value'.
     */
    public readonly scriptArguments!: pulumi.Output<string[]>;
    /**
     * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Certificate Mapper.
     */
    public readonly scriptClass!: pulumi.Output<string | undefined>;
    /**
     * Specifies the name or OID of the attribute whose value should exactly match the certificate subject DN.
     */
    public readonly subjectAttribute!: pulumi.Output<string>;
    /**
     * Specifies a mapping between certificate attributes and user attributes.
     */
    public readonly subjectAttributeMappings!: pulumi.Output<string[]>;
    /**
     * The type of Certificate Mapper resource. Options are ['subject-equals-dn', 'subject-dn-to-user-attribute',
     * 'groovy-scripted', 'subject-attribute-to-user-attribute', 'fingerprint', 'third-party']
     */
    public readonly type!: pulumi.Output<string>;
    /**
     * When the `type` attribute is set to: - One of [`subject-dn-to-user-attribute`, `subject-attribute-to-user-attribute`]:
     * Specifies the base DNs that should be used when performing searches to map the client certificate to a user entry. -
     * `fingerprint`: Specifies the set of base DNs below which to search for users.
     */
    public readonly userBaseDns!: pulumi.Output<string[]>;

    /**
     * Create a CertificateMapper resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CertificateMapperArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CertificateMapperArgs | CertificateMapperState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CertificateMapperState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["enabled"] = state ? state.enabled : undefined;
            resourceInputs["extensionArguments"] = state ? state.extensionArguments : undefined;
            resourceInputs["extensionClass"] = state ? state.extensionClass : undefined;
            resourceInputs["fingerprintAlgorithm"] = state ? state.fingerprintAlgorithm : undefined;
            resourceInputs["fingerprintAttribute"] = state ? state.fingerprintAttribute : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["notifications"] = state ? state.notifications : undefined;
            resourceInputs["requiredActions"] = state ? state.requiredActions : undefined;
            resourceInputs["scriptArguments"] = state ? state.scriptArguments : undefined;
            resourceInputs["scriptClass"] = state ? state.scriptClass : undefined;
            resourceInputs["subjectAttribute"] = state ? state.subjectAttribute : undefined;
            resourceInputs["subjectAttributeMappings"] = state ? state.subjectAttributeMappings : undefined;
            resourceInputs["type"] = state ? state.type : undefined;
            resourceInputs["userBaseDns"] = state ? state.userBaseDns : undefined;
        } else {
            const args = argsOrState as CertificateMapperArgs | undefined;
            if ((!args || args.enabled === undefined) && !opts.urn) {
                throw new Error("Missing required property 'enabled'");
            }
            if ((!args || args.type === undefined) && !opts.urn) {
                throw new Error("Missing required property 'type'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["enabled"] = args ? args.enabled : undefined;
            resourceInputs["extensionArguments"] = args ? args.extensionArguments : undefined;
            resourceInputs["extensionClass"] = args ? args.extensionClass : undefined;
            resourceInputs["fingerprintAlgorithm"] = args ? args.fingerprintAlgorithm : undefined;
            resourceInputs["fingerprintAttribute"] = args ? args.fingerprintAttribute : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["scriptArguments"] = args ? args.scriptArguments : undefined;
            resourceInputs["scriptClass"] = args ? args.scriptClass : undefined;
            resourceInputs["subjectAttribute"] = args ? args.subjectAttribute : undefined;
            resourceInputs["subjectAttributeMappings"] = args ? args.subjectAttributeMappings : undefined;
            resourceInputs["type"] = args ? args.type : undefined;
            resourceInputs["userBaseDns"] = args ? args.userBaseDns : undefined;
            resourceInputs["notifications"] = undefined /*out*/;
            resourceInputs["requiredActions"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CertificateMapper.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CertificateMapper resources.
 */
export interface CertificateMapperState {
    /**
     * A description for this Certificate Mapper
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the Certificate Mapper is enabled.
     */
    enabled?: pulumi.Input<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Certificate Mapper. Each configuration property
     * should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Certificate Mapper.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Specifies the name of the digest algorithm to compute the fingerprint of client certificates.
     */
    fingerprintAlgorithm?: pulumi.Input<string>;
    /**
     * Specifies the attribute in which to look for the fingerprint.
     */
    fingerprintAttribute?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * Notifications returned by the PingDirectory Configuration API.
     */
    notifications?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Required actions returned by the PingDirectory Configuration API.
     */
    requiredActions?: pulumi.Input<pulumi.Input<inputs.CertificateMapperRequiredAction>[]>;
    /**
     * The set of arguments used to customize the behavior for the Scripted Certificate Mapper. Each configuration property
     * should be given in the form 'name=value'.
     */
    scriptArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Certificate Mapper.
     */
    scriptClass?: pulumi.Input<string>;
    /**
     * Specifies the name or OID of the attribute whose value should exactly match the certificate subject DN.
     */
    subjectAttribute?: pulumi.Input<string>;
    /**
     * Specifies a mapping between certificate attributes and user attributes.
     */
    subjectAttributeMappings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of Certificate Mapper resource. Options are ['subject-equals-dn', 'subject-dn-to-user-attribute',
     * 'groovy-scripted', 'subject-attribute-to-user-attribute', 'fingerprint', 'third-party']
     */
    type?: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`subject-dn-to-user-attribute`, `subject-attribute-to-user-attribute`]:
     * Specifies the base DNs that should be used when performing searches to map the client certificate to a user entry. -
     * `fingerprint`: Specifies the set of base DNs below which to search for users.
     */
    userBaseDns?: pulumi.Input<pulumi.Input<string>[]>;
}

/**
 * The set of arguments for constructing a CertificateMapper resource.
 */
export interface CertificateMapperArgs {
    /**
     * A description for this Certificate Mapper
     */
    description?: pulumi.Input<string>;
    /**
     * Indicates whether the Certificate Mapper is enabled.
     */
    enabled: pulumi.Input<boolean>;
    /**
     * The set of arguments used to customize the behavior for the Third Party Certificate Mapper. Each configuration property
     * should be given in the form 'name=value'.
     */
    extensionArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Java class providing the logic for the Third Party Certificate Mapper.
     */
    extensionClass?: pulumi.Input<string>;
    /**
     * Specifies the name of the digest algorithm to compute the fingerprint of client certificates.
     */
    fingerprintAlgorithm?: pulumi.Input<string>;
    /**
     * Specifies the attribute in which to look for the fingerprint.
     */
    fingerprintAttribute?: pulumi.Input<string>;
    /**
     * Name of this config object.
     */
    name?: pulumi.Input<string>;
    /**
     * The set of arguments used to customize the behavior for the Scripted Certificate Mapper. Each configuration property
     * should be given in the form 'name=value'.
     */
    scriptArguments?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The fully-qualified name of the Groovy class providing the logic for the Groovy Scripted Certificate Mapper.
     */
    scriptClass?: pulumi.Input<string>;
    /**
     * Specifies the name or OID of the attribute whose value should exactly match the certificate subject DN.
     */
    subjectAttribute?: pulumi.Input<string>;
    /**
     * Specifies a mapping between certificate attributes and user attributes.
     */
    subjectAttributeMappings?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The type of Certificate Mapper resource. Options are ['subject-equals-dn', 'subject-dn-to-user-attribute',
     * 'groovy-scripted', 'subject-attribute-to-user-attribute', 'fingerprint', 'third-party']
     */
    type: pulumi.Input<string>;
    /**
     * When the `type` attribute is set to: - One of [`subject-dn-to-user-attribute`, `subject-attribute-to-user-attribute`]:
     * Specifies the base DNs that should be used when performing searches to map the client certificate to a user entry. -
     * `fingerprint`: Specifies the set of base DNs below which to search for users.
     */
    userBaseDns?: pulumi.Input<pulumi.Input<string>[]>;
}
