// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Paas extends pulumi.CustomResource {
    /**
     * Get an existing Paas resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: PaasState, opts?: pulumi.CustomResourceOptions): Paas {
        return new Paas(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'gridscale:index/paas:Paas';

    /**
     * Returns true if the given object is an instance of Paas.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Paas {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Paas.__pulumiType;
    }

    /**
     * Time of the last change
     */
    public /*out*/ readonly changeTime!: pulumi.Output<string>;
    /**
     * Time of the creation
     */
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    /**
     * Current price of PaaS service
     */
    public /*out*/ readonly currentPrice!: pulumi.Output<number>;
    /**
     * K8s config data
     */
    public /*out*/ readonly kubeconfig!: pulumi.Output<string>;
    /**
     * List of labels.
     */
    public readonly labels!: pulumi.Output<string[] | undefined>;
    /**
     * Ports that PaaS service listens to
     */
    public /*out*/ readonly listenPorts!: pulumi.Output<outputs.PaasListenPort[]>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The UUID of the network that the service is attached to.
     */
    public readonly networkUuid!: pulumi.Output<string>;
    /**
     * Parameter for PaaS service
     */
    public readonly parameters!: pulumi.Output<outputs.PaasParameter[] | undefined>;
    /**
     * Password for PaaS service
     */
    public /*out*/ readonly password!: pulumi.Output<string>;
    /**
     * Resource for PaaS service
     */
    public readonly resourceLimits!: pulumi.Output<outputs.PaasResourceLimit[] | undefined>;
    /**
     * Security zone UUID linked to PaaS service
     *
     * @deprecated Deprecated
     */
    public readonly securityZoneUuid!: pulumi.Output<string>;
    /**
     * The template service's category used to create the service.
     */
    public /*out*/ readonly serviceTemplateCategory!: pulumi.Output<string>;
    /**
     * Template that PaaS service uses
     */
    public readonly serviceTemplateUuid!: pulumi.Output<string>;
    public /*out*/ readonly serviceTemplateUuidComputed!: pulumi.Output<string>;
    /**
     * Current status of PaaS service
     */
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.PaasTimeouts | undefined>;
    /**
     * Number of minutes that PaaS service is in use
     */
    public /*out*/ readonly usageInMinute!: pulumi.Output<number>;
    /**
     * Username for PaaS service
     */
    public /*out*/ readonly username!: pulumi.Output<string>;

    /**
     * Create a Paas resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: PaasArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: PaasArgs | PaasState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as PaasState | undefined;
            resourceInputs["changeTime"] = state ? state.changeTime : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["currentPrice"] = state ? state.currentPrice : undefined;
            resourceInputs["kubeconfig"] = state ? state.kubeconfig : undefined;
            resourceInputs["labels"] = state ? state.labels : undefined;
            resourceInputs["listenPorts"] = state ? state.listenPorts : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["networkUuid"] = state ? state.networkUuid : undefined;
            resourceInputs["parameters"] = state ? state.parameters : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["resourceLimits"] = state ? state.resourceLimits : undefined;
            resourceInputs["securityZoneUuid"] = state ? state.securityZoneUuid : undefined;
            resourceInputs["serviceTemplateCategory"] = state ? state.serviceTemplateCategory : undefined;
            resourceInputs["serviceTemplateUuid"] = state ? state.serviceTemplateUuid : undefined;
            resourceInputs["serviceTemplateUuidComputed"] = state ? state.serviceTemplateUuidComputed : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["usageInMinute"] = state ? state.usageInMinute : undefined;
            resourceInputs["username"] = state ? state.username : undefined;
        } else {
            const args = argsOrState as PaasArgs | undefined;
            if ((!args || args.serviceTemplateUuid === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceTemplateUuid'");
            }
            resourceInputs["labels"] = args ? args.labels : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["networkUuid"] = args ? args.networkUuid : undefined;
            resourceInputs["parameters"] = args ? args.parameters : undefined;
            resourceInputs["resourceLimits"] = args ? args.resourceLimits : undefined;
            resourceInputs["securityZoneUuid"] = args ? args.securityZoneUuid : undefined;
            resourceInputs["serviceTemplateUuid"] = args ? args.serviceTemplateUuid : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["changeTime"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["currentPrice"] = undefined /*out*/;
            resourceInputs["kubeconfig"] = undefined /*out*/;
            resourceInputs["listenPorts"] = undefined /*out*/;
            resourceInputs["password"] = undefined /*out*/;
            resourceInputs["serviceTemplateCategory"] = undefined /*out*/;
            resourceInputs["serviceTemplateUuidComputed"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
            resourceInputs["usageInMinute"] = undefined /*out*/;
            resourceInputs["username"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["kubeconfig", "password", "username"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Paas.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Paas resources.
 */
export interface PaasState {
    /**
     * Time of the last change
     */
    changeTime?: pulumi.Input<string>;
    /**
     * Time of the creation
     */
    createTime?: pulumi.Input<string>;
    /**
     * Current price of PaaS service
     */
    currentPrice?: pulumi.Input<number>;
    /**
     * K8s config data
     */
    kubeconfig?: pulumi.Input<string>;
    /**
     * List of labels.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * Ports that PaaS service listens to
     */
    listenPorts?: pulumi.Input<pulumi.Input<inputs.PaasListenPort>[]>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    name?: pulumi.Input<string>;
    /**
     * The UUID of the network that the service is attached to.
     */
    networkUuid?: pulumi.Input<string>;
    /**
     * Parameter for PaaS service
     */
    parameters?: pulumi.Input<pulumi.Input<inputs.PaasParameter>[]>;
    /**
     * Password for PaaS service
     */
    password?: pulumi.Input<string>;
    /**
     * Resource for PaaS service
     */
    resourceLimits?: pulumi.Input<pulumi.Input<inputs.PaasResourceLimit>[]>;
    /**
     * Security zone UUID linked to PaaS service
     *
     * @deprecated Deprecated
     */
    securityZoneUuid?: pulumi.Input<string>;
    /**
     * The template service's category used to create the service.
     */
    serviceTemplateCategory?: pulumi.Input<string>;
    /**
     * Template that PaaS service uses
     */
    serviceTemplateUuid?: pulumi.Input<string>;
    serviceTemplateUuidComputed?: pulumi.Input<string>;
    /**
     * Current status of PaaS service
     */
    status?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PaasTimeouts>;
    /**
     * Number of minutes that PaaS service is in use
     */
    usageInMinute?: pulumi.Input<number>;
    /**
     * Username for PaaS service
     */
    username?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Paas resource.
 */
export interface PaasArgs {
    /**
     * List of labels.
     */
    labels?: pulumi.Input<pulumi.Input<string>[]>;
    /**
     * The human-readable name of the object. It supports the full UTF-8 character set, with a maximum of 64 characters
     */
    name?: pulumi.Input<string>;
    /**
     * The UUID of the network that the service is attached to.
     */
    networkUuid?: pulumi.Input<string>;
    /**
     * Parameter for PaaS service
     */
    parameters?: pulumi.Input<pulumi.Input<inputs.PaasParameter>[]>;
    /**
     * Resource for PaaS service
     */
    resourceLimits?: pulumi.Input<pulumi.Input<inputs.PaasResourceLimit>[]>;
    /**
     * Security zone UUID linked to PaaS service
     *
     * @deprecated Deprecated
     */
    securityZoneUuid?: pulumi.Input<string>;
    /**
     * Template that PaaS service uses
     */
    serviceTemplateUuid: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.PaasTimeouts>;
}
