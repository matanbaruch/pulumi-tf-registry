// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class CiscoSnmpFeatureTemplate extends pulumi.CustomResource {
    /**
     * Get an existing CiscoSnmpFeatureTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: CiscoSnmpFeatureTemplateState, opts?: pulumi.CustomResourceOptions): CiscoSnmpFeatureTemplate {
        return new CiscoSnmpFeatureTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'sdwan:index/ciscoSnmpFeatureTemplate:CiscoSnmpFeatureTemplate';

    /**
     * Returns true if the given object is an instance of CiscoSnmpFeatureTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is CiscoSnmpFeatureTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === CiscoSnmpFeatureTemplate.__pulumiType;
    }

    /**
     * Configure SNMP community
     */
    public readonly communities!: pulumi.Output<outputs.CiscoSnmpFeatureTemplateCommunity[] | undefined>;
    /**
     * Set the contact for this managed node
     */
    public readonly contact!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly contactVariable!: pulumi.Output<string | undefined>;
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
     * Configure an SNMP group
     */
    public readonly groups!: pulumi.Output<outputs.CiscoSnmpFeatureTemplateGroup[] | undefined>;
    /**
     * Set the physical location of this managed node
     */
    public readonly location!: pulumi.Output<string | undefined>;
    /**
     * Variable name
     */
    public readonly locationVariable!: pulumi.Output<string | undefined>;
    /**
     * The name of the feature template
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * Enable or disable SNMP - Default value: `true`
     */
    public readonly shutdown!: pulumi.Output<boolean | undefined>;
    /**
     * Variable name
     */
    public readonly shutdownVariable!: pulumi.Output<string | undefined>;
    /**
     * The template type
     */
    public /*out*/ readonly templateType!: pulumi.Output<string>;
    /**
     * Configure SNMP server to receive SNMP traps
     */
    public readonly trapTargets!: pulumi.Output<outputs.CiscoSnmpFeatureTemplateTrapTarget[] | undefined>;
    /**
     * Configure an SNMP user
     */
    public readonly users!: pulumi.Output<outputs.CiscoSnmpFeatureTemplateUser[] | undefined>;
    /**
     * The version of the feature template
     */
    public /*out*/ readonly version!: pulumi.Output<number>;
    /**
     * Configure a view record
     */
    public readonly views!: pulumi.Output<outputs.CiscoSnmpFeatureTemplateView[] | undefined>;

    /**
     * Create a CiscoSnmpFeatureTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: CiscoSnmpFeatureTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: CiscoSnmpFeatureTemplateArgs | CiscoSnmpFeatureTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as CiscoSnmpFeatureTemplateState | undefined;
            resourceInputs["communities"] = state ? state.communities : undefined;
            resourceInputs["contact"] = state ? state.contact : undefined;
            resourceInputs["contactVariable"] = state ? state.contactVariable : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["deviceTypes"] = state ? state.deviceTypes : undefined;
            resourceInputs["groups"] = state ? state.groups : undefined;
            resourceInputs["location"] = state ? state.location : undefined;
            resourceInputs["locationVariable"] = state ? state.locationVariable : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["shutdown"] = state ? state.shutdown : undefined;
            resourceInputs["shutdownVariable"] = state ? state.shutdownVariable : undefined;
            resourceInputs["templateType"] = state ? state.templateType : undefined;
            resourceInputs["trapTargets"] = state ? state.trapTargets : undefined;
            resourceInputs["users"] = state ? state.users : undefined;
            resourceInputs["version"] = state ? state.version : undefined;
            resourceInputs["views"] = state ? state.views : undefined;
        } else {
            const args = argsOrState as CiscoSnmpFeatureTemplateArgs | undefined;
            if ((!args || args.description === undefined) && !opts.urn) {
                throw new Error("Missing required property 'description'");
            }
            if ((!args || args.deviceTypes === undefined) && !opts.urn) {
                throw new Error("Missing required property 'deviceTypes'");
            }
            resourceInputs["communities"] = args ? args.communities : undefined;
            resourceInputs["contact"] = args ? args.contact : undefined;
            resourceInputs["contactVariable"] = args ? args.contactVariable : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["deviceTypes"] = args ? args.deviceTypes : undefined;
            resourceInputs["groups"] = args ? args.groups : undefined;
            resourceInputs["location"] = args ? args.location : undefined;
            resourceInputs["locationVariable"] = args ? args.locationVariable : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["shutdown"] = args ? args.shutdown : undefined;
            resourceInputs["shutdownVariable"] = args ? args.shutdownVariable : undefined;
            resourceInputs["trapTargets"] = args ? args.trapTargets : undefined;
            resourceInputs["users"] = args ? args.users : undefined;
            resourceInputs["views"] = args ? args.views : undefined;
            resourceInputs["templateType"] = undefined /*out*/;
            resourceInputs["version"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(CiscoSnmpFeatureTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering CiscoSnmpFeatureTemplate resources.
 */
export interface CiscoSnmpFeatureTemplateState {
    /**
     * Configure SNMP community
     */
    communities?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateCommunity>[]>;
    /**
     * Set the contact for this managed node
     */
    contact?: pulumi.Input<string>;
    /**
     * Variable name
     */
    contactVariable?: pulumi.Input<string>;
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
     * Configure an SNMP group
     */
    groups?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateGroup>[]>;
    /**
     * Set the physical location of this managed node
     */
    location?: pulumi.Input<string>;
    /**
     * Variable name
     */
    locationVariable?: pulumi.Input<string>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Enable or disable SNMP - Default value: `true`
     */
    shutdown?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    shutdownVariable?: pulumi.Input<string>;
    /**
     * The template type
     */
    templateType?: pulumi.Input<string>;
    /**
     * Configure SNMP server to receive SNMP traps
     */
    trapTargets?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateTrapTarget>[]>;
    /**
     * Configure an SNMP user
     */
    users?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateUser>[]>;
    /**
     * The version of the feature template
     */
    version?: pulumi.Input<number>;
    /**
     * Configure a view record
     */
    views?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateView>[]>;
}

/**
 * The set of arguments for constructing a CiscoSnmpFeatureTemplate resource.
 */
export interface CiscoSnmpFeatureTemplateArgs {
    /**
     * Configure SNMP community
     */
    communities?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateCommunity>[]>;
    /**
     * Set the contact for this managed node
     */
    contact?: pulumi.Input<string>;
    /**
     * Variable name
     */
    contactVariable?: pulumi.Input<string>;
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
     * Configure an SNMP group
     */
    groups?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateGroup>[]>;
    /**
     * Set the physical location of this managed node
     */
    location?: pulumi.Input<string>;
    /**
     * Variable name
     */
    locationVariable?: pulumi.Input<string>;
    /**
     * The name of the feature template
     */
    name?: pulumi.Input<string>;
    /**
     * Enable or disable SNMP - Default value: `true`
     */
    shutdown?: pulumi.Input<boolean>;
    /**
     * Variable name
     */
    shutdownVariable?: pulumi.Input<string>;
    /**
     * Configure SNMP server to receive SNMP traps
     */
    trapTargets?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateTrapTarget>[]>;
    /**
     * Configure an SNMP user
     */
    users?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateUser>[]>;
    /**
     * Configure a view record
     */
    views?: pulumi.Input<pulumi.Input<inputs.CiscoSnmpFeatureTemplateView>[]>;
}
