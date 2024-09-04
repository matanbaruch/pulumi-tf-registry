// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CiscoThousandeyesFeatureTemplate extends pulumi.CustomResource {
    /**
     * Get an existing CiscoThousandeyesFeatureTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CiscoThousandeyesFeatureTemplateState, opts?: pulumi.CustomResourceOptions): CiscoThousandeyesFeatureTemplate {
        return new CiscoThousandeyesFeatureTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/ciscoThousandeyesFeatureTemplate:CiscoThousandeyesFeatureTemplate';

    /**
     * Returns true if the given object is an instance of CiscoThousandeyesFeatureTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CiscoThousandeyesFeatureTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CiscoThousandeyesFeatureTemplate.__pulumiType;
    }

    /**
     * The description of the feature template
     */
    public readonly description!: pulumi.Output<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    public readonly deviceTypes!: pulumi.Output<string[]>;
    /**
     * The name of the feature template
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The template type
     */
    public /*out*/ readonly templateType!: pulumi.Output<string>;
    /**
     * The version of the feature template
     */
    public /*out*/ readonly version!: pulumi.Output<number>;
    /**
     * Virtual application Instance
     */
    public readonly virtualApplications!: pulumi.Output<outputs.CiscoThousandeyesFeatureTemplateVirtualApplication[] | undefined>;

    /**
     * Create a CiscoThousandeyesFeatureTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CiscoThousandeyesFeatureTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CiscoThousandeyesFeatureTemplateArgs | CiscoThousandeyesFeatureTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CiscoThousandeyesFeatureTemplateState | undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceTypes"] = state ? state.deviceTypes : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["templateType"] = state ? state.templateType : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["virtualApplications"] = state ? state.virtualApplications : undefined;
        } else {
            const args = argsOrState as CiscoThousandeyesFeatureTemplateArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.deviceTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceTypes'");
            }
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceTypes"] = args ? args.deviceTypes : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["virtualApplications"] = args ? args.virtualApplications : undefined;
            resourceInputs["templateType"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CiscoThousandeyesFeatureTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CiscoThousandeyesFeatureTemplate resources.
 */
export interface CiscoThousandeyesFeatureTemplateState {
    /**
     * The description of the feature template
     */
    description?: pulumi.Input<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    deviceTypes?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * The template type
     */
    templateType?: pulumi.Input<string>;
    /**
     * The version of the feature template
     */
    version?: pulumi.Input<number>;
    /**
     * Virtual application Instance
     */
    virtualApplications?: pulumi.Input<pulumi.Input<inputs.CiscoThousandeyesFeatureTemplateVirtualApplication>[]>;
}

/**
 * The set of arguments for constructing a CiscoThousandeyesFeatureTemplate resource.
 */
export interface CiscoThousandeyesFeatureTemplateArgs {
    /**
     * The description of the feature template
     */
    description: pulumi.Input<string>;
    /**
     * List of supported device types - Choices: `vedge-C8000V`, `vedge-C8300-1N1S-4T2X`, `vedge-C8300-1N1S-6T`,
     * `vedge-C8300-2N2S-6T`, `vedge-C8300-2N2S-4T2X`, `vedge-C8500-12X4QC`, `vedge-C8500-12X`, `vedge-C8500-20X6C`,
     * `vedge-C8500L-8S4X`, `vedge-C8200-1N-4T`, `vedge-C8200L-1N-4T`
     */
    deviceTypes: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Virtual application Instance
     */
    virtualApplications?: pulumi.Input<pulumi.Input<inputs.CiscoThousandeyesFeatureTemplateVirtualApplication>[]>;
}
