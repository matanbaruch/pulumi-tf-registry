// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class NodeTemplate extends pulumi.CustomResource {
    /**
     * Get an existing NodeTemplate resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: NodeTemplateState, opts?: pulumi.CustomResourceOptions): NodeTemplate {
        return new NodeTemplate(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'rancher2:index/nodeTemplate:NodeTemplate';

    /**
     * Returns true if the given object is an instance of NodeTemplate.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is NodeTemplate {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === NodeTemplate.__pulumiType;
    }

    public readonly amazonec2Config!: pulumi.Output<outputs.NodeTemplateAmazonec2Config | undefined>;
    /**
     * Annotations of the resource
     */
    public readonly annotations!: pulumi.Output<{[key: string]: string}>;
    public readonly authCertificateAuthority!: pulumi.Output<string | undefined>;
    public readonly authKey!: pulumi.Output<string | undefined>;
    public readonly azureConfig!: pulumi.Output<outputs.NodeTemplateAzureConfig | undefined>;
    public readonly cloudCredentialId!: pulumi.Output<string | undefined>;
    public readonly description!: pulumi.Output<string | undefined>;
    public readonly digitaloceanConfig!: pulumi.Output<outputs.NodeTemplateDigitaloceanConfig | undefined>;
    public /*out*/ readonly driver!: pulumi.Output<string>;
    public readonly driverId!: pulumi.Output<string>;
    public readonly engineEnv!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly engineInsecureRegistries!: pulumi.Output<string[] | undefined>;
    public readonly engineInstallUrl!: pulumi.Output<string>;
    public readonly engineLabel!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly engineOpt!: pulumi.Output<{[key: string]: string} | undefined>;
    public readonly engineRegistryMirrors!: pulumi.Output<string[] | undefined>;
    public readonly engineStorageDriver!: pulumi.Output<string | undefined>;
    public readonly harvesterConfig!: pulumi.Output<outputs.NodeTemplateHarvesterConfig | undefined>;
    public readonly hetznerConfig!: pulumi.Output<outputs.NodeTemplateHetznerConfig | undefined>;
    /**
     * Labels of the resource
     */
    public readonly labels!: pulumi.Output<{[key: string]: string}>;
    public readonly linodeConfig!: pulumi.Output<outputs.NodeTemplateLinodeConfig | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nodeTaints!: pulumi.Output<outputs.NodeTemplateNodeTaint[] | undefined>;
    public readonly opennebulaConfig!: pulumi.Output<outputs.NodeTemplateOpennebulaConfig | undefined>;
    public readonly openstackConfig!: pulumi.Output<outputs.NodeTemplateOpenstackConfig | undefined>;
    public readonly outscaleConfig!: pulumi.Output<outputs.NodeTemplateOutscaleConfig | undefined>;
    public readonly timeouts!: pulumi.Output<outputs.NodeTemplateTimeouts | undefined>;
    public readonly useInternalIpAddress!: pulumi.Output<boolean | undefined>;
    public readonly vsphereConfig!: pulumi.Output<outputs.NodeTemplateVsphereConfig | undefined>;

    /**
     * Create a NodeTemplate resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: NodeTemplateArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: NodeTemplateArgs | NodeTemplateState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as NodeTemplateState | undefined;
            resourceInputs["amazonec2Config"] = state ? state.amazonec2Config : undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["authCertificateAuthority"] = state ? state.authCertificateAuthority : undefined;
            resourceInputs["authKey"] = state ? state.authKey : undefined;
            resourceInputs["azureConfig"] = state ? state.azureConfig : undefined;
            resourceInputs["cloudCredentialId"] = state ? state.cloudCredentialId : undefined;
            resourceInputs["description"] = state ? state.description : undefined;
            resourceInputs["digitaloceanConfig"] = state ? state.digitaloceanConfig : undefined;
            resourceInputs["driver"] = state ? state.driver : undefined;
            resourceInputs["driverId"] = state ? state.driverId : undefined;
            resourceInputs["engineEnv"] = state ? state.engineEnv : undefined;
            resourceInputs["engineInsecureRegistries"] = state ? state.engineInsecureRegistries : undefined;
            resourceInputs["engineInstallUrl"] = state ? state.engineInstallUrl : undefined;
            resourceInputs["engineLabel"] = state ? state.engineLabel : undefined;
            resourceInputs["engineOpt"] = state ? state.engineOpt : undefined;
            resourceInputs["engineRegistryMirrors"] = state ? state.engineRegistryMirrors : undefined;
            resourceInputs["engineStorageDriver"] = state ? state.engineStorageDriver : undefined;
            resourceInputs["harvesterConfig"] = state ? state.harvesterConfig : undefined;
            resourceInputs["hetznerConfig"] = state ? state.hetznerConfig : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["linodeConfig"] = state ? state.linodeConfig : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nodeTaints"] = state ? state.nodeTaints : undefined;
            resourceInputs["opennebulaConfig"] = state ? state.opennebulaConfig : undefined;
            resourceInputs["openstackConfig"] = state ? state.openstackConfig : undefined;
            resourceInputs["outscaleConfig"] = state ? state.outscaleConfig : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["useInternalIpAddress"] = state ? state.useInternalIpAddress : undefined;
            resourceInputs["vsphereConfig"] = state ? state.vsphereConfig : undefined;
        } else {
            const args = argsOrState as NodeTemplateArgs | undefined;
            resourceInputs["amazonec2Config"] = args ? args.amazonec2Config : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["authCertificateAuthority"] = args?.authCertificateAuthority ? pulumi.secret(args.authCertificateAuthority) : undefined;
            resourceInputs["authKey"] = args?.authKey ? pulumi.secret(args.authKey) : undefined;
            resourceInputs["azureConfig"] = args ? args.azureConfig : undefined;
            resourceInputs["cloudCredentialId"] = args ? args.cloudCredentialId : undefined;
            resourceInputs["description"] = args ? args.description : undefined;
            resourceInputs["digitaloceanConfig"] = args ? args.digitaloceanConfig : undefined;
            resourceInputs["driverId"] = args ? args.driverId : undefined;
            resourceInputs["engineEnv"] = args ? args.engineEnv : undefined;
            resourceInputs["engineInsecureRegistries"] = args ? args.engineInsecureRegistries : undefined;
            resourceInputs["engineInstallUrl"] = args ? args.engineInstallUrl : undefined;
            resourceInputs["engineLabel"] = args ? args.engineLabel : undefined;
            resourceInputs["engineOpt"] = args ? args.engineOpt : undefined;
            resourceInputs["engineRegistryMirrors"] = args ? args.engineRegistryMirrors : undefined;
            resourceInputs["engineStorageDriver"] = args ? args.engineStorageDriver : undefined;
            resourceInputs["harvesterConfig"] = args ? args.harvesterConfig : undefined;
            resourceInputs["hetznerConfig"] = args ? args.hetznerConfig : undefined;
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["linodeConfig"] = args ? args.linodeConfig : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nodeTaints"] = args ? args.nodeTaints : undefined;
            resourceInputs["opennebulaConfig"] = args ? args.opennebulaConfig : undefined;
            resourceInputs["openstackConfig"] = args ? args.openstackConfig : undefined;
            resourceInputs["outscaleConfig"] = args ? args.outscaleConfig : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["useInternalIpAddress"] = args ? args.useInternalIpAddress : undefined;
            resourceInputs["vsphereConfig"] = args ? args.vsphereConfig : undefined;
            resourceInputs["driver"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["authCertificateAuthority", "authKey"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(NodeTemplate.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering NodeTemplate resources.
 */
export interface NodeTemplateState {
    amazonec2Config?: pulumi.Input<inputs.NodeTemplateAmazonec2Config>;
    /**
     * Annotations of the resource
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    authCertificateAuthority?: pulumi.Input<string>;
    authKey?: pulumi.Input<string>;
    azureConfig?: pulumi.Input<inputs.NodeTemplateAzureConfig>;
    cloudCredentialId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    digitaloceanConfig?: pulumi.Input<inputs.NodeTemplateDigitaloceanConfig>;
    driver?: pulumi.Input<string>;
    driverId?: pulumi.Input<string>;
    engineEnv?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    engineInsecureRegistries?: pulumi.Input<pulumi.Input<string>[]>;
    engineInstallUrl?: pulumi.Input<string>;
    engineLabel?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    engineOpt?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    engineRegistryMirrors?: pulumi.Input<pulumi.Input<string>[]>;
    engineStorageDriver?: pulumi.Input<string>;
    harvesterConfig?: pulumi.Input<inputs.NodeTemplateHarvesterConfig>;
    hetznerConfig?: pulumi.Input<inputs.NodeTemplateHetznerConfig>;
    /**
     * Labels of the resource
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    linodeConfig?: pulumi.Input<inputs.NodeTemplateLinodeConfig>;
    name?: pulumi.Input<string>;
    nodeTaints?: pulumi.Input<pulumi.Input<inputs.NodeTemplateNodeTaint>[]>;
    opennebulaConfig?: pulumi.Input<inputs.NodeTemplateOpennebulaConfig>;
    openstackConfig?: pulumi.Input<inputs.NodeTemplateOpenstackConfig>;
    outscaleConfig?: pulumi.Input<inputs.NodeTemplateOutscaleConfig>;
    timeouts?: pulumi.Input<inputs.NodeTemplateTimeouts>;
    useInternalIpAddress?: pulumi.Input<boolean>;
    vsphereConfig?: pulumi.Input<inputs.NodeTemplateVsphereConfig>;
}

/**
 * The set of arguments for constructing a NodeTemplate resource.
 */
export interface NodeTemplateArgs {
    amazonec2Config?: pulumi.Input<inputs.NodeTemplateAmazonec2Config>;
    /**
     * Annotations of the resource
     */
    annotations?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    authCertificateAuthority?: pulumi.Input<string>;
    authKey?: pulumi.Input<string>;
    azureConfig?: pulumi.Input<inputs.NodeTemplateAzureConfig>;
    cloudCredentialId?: pulumi.Input<string>;
    description?: pulumi.Input<string>;
    digitaloceanConfig?: pulumi.Input<inputs.NodeTemplateDigitaloceanConfig>;
    driverId?: pulumi.Input<string>;
    engineEnv?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    engineInsecureRegistries?: pulumi.Input<pulumi.Input<string>[]>;
    engineInstallUrl?: pulumi.Input<string>;
    engineLabel?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    engineOpt?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    engineRegistryMirrors?: pulumi.Input<pulumi.Input<string>[]>;
    engineStorageDriver?: pulumi.Input<string>;
    harvesterConfig?: pulumi.Input<inputs.NodeTemplateHarvesterConfig>;
    hetznerConfig?: pulumi.Input<inputs.NodeTemplateHetznerConfig>;
    /**
     * Labels of the resource
     */
    labels?: pulumi.Input<{[key: string]: pulumi.Input<string>}>;
    linodeConfig?: pulumi.Input<inputs.NodeTemplateLinodeConfig>;
    name?: pulumi.Input<string>;
    nodeTaints?: pulumi.Input<pulumi.Input<inputs.NodeTemplateNodeTaint>[]>;
    opennebulaConfig?: pulumi.Input<inputs.NodeTemplateOpennebulaConfig>;
    openstackConfig?: pulumi.Input<inputs.NodeTemplateOpenstackConfig>;
    outscaleConfig?: pulumi.Input<inputs.NodeTemplateOutscaleConfig>;
    timeouts?: pulumi.Input<inputs.NodeTemplateTimeouts>;
    useInternalIpAddress?: pulumi.Input<boolean>;
    vsphereConfig?: pulumi.Input<inputs.NodeTemplateVsphereConfig>;
}
