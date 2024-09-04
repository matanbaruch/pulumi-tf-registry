// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Uk8sCluster extends pulumi.CustomResource {
    /**
     * Get an existing Uk8sCluster resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: Uk8sClusterState, opts?: pulumi.CustomResourceOptions): Uk8sCluster {
        return new Uk8sCluster(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'ucloud:index/uk8sCluster:Uk8sCluster';

    /**
     * Returns true if the given object is an instance of Uk8sCluster.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Uk8sCluster {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Uk8sCluster.__pulumiType;
    }

    public /*out*/ readonly apiServer!: pulumi.Output<string>;
    public readonly chargeType!: pulumi.Output<string>;
    public /*out*/ readonly createTime!: pulumi.Output<string>;
    public readonly deleteDisksWithInstance!: pulumi.Output<boolean | undefined>;
    public readonly duration!: pulumi.Output<number | undefined>;
    public readonly enableExternalApiServer!: pulumi.Output<boolean | undefined>;
    public /*out*/ readonly externalApiServer!: pulumi.Output<string>;
    public readonly imageId!: pulumi.Output<string | undefined>;
    public readonly initScript!: pulumi.Output<string | undefined>;
    public readonly k8sVersion!: pulumi.Output<string>;
    public readonly kubeProxy!: pulumi.Output<outputs.Uk8sClusterKubeProxy | undefined>;
    public readonly master!: pulumi.Output<outputs.Uk8sClusterMaster>;
    public readonly name!: pulumi.Output<string>;
    public readonly password!: pulumi.Output<string>;
    public /*out*/ readonly podCidr!: pulumi.Output<string>;
    public readonly serviceCidr!: pulumi.Output<string>;
    public /*out*/ readonly status!: pulumi.Output<string>;
    public readonly subnetId!: pulumi.Output<string>;
    public readonly timeouts!: pulumi.Output<outputs.Uk8sClusterTimeouts | undefined>;
    public readonly userData!: pulumi.Output<string | undefined>;
    public readonly vpcId!: pulumi.Output<string>;

    /**
     * Create a Uk8sCluster resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: Uk8sClusterArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: Uk8sClusterArgs | Uk8sClusterState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as Uk8sClusterState | undefined;
            resourceInputs["apiServer"] = state ? state.apiServer : undefined;
            resourceInputs["chargeType"] = state ? state.chargeType : undefined;
            resourceInputs["createTime"] = state ? state.createTime : undefined;
            resourceInputs["deleteDisksWithInstance"] = state ? state.deleteDisksWithInstance : undefined;
            resourceInputs["duration"] = state ? state.duration : undefined;
            resourceInputs["enableExternalApiServer"] = state ? state.enableExternalApiServer : undefined;
            resourceInputs["externalApiServer"] = state ? state.externalApiServer : undefined;
            resourceInputs["imageId"] = state ? state.imageId : undefined;
            resourceInputs["initScript"] = state ? state.initScript : undefined;
            resourceInputs["k8sVersion"] = state ? state.k8sVersion : undefined;
            resourceInputs["kubeProxy"] = state ? state.kubeProxy : undefined;
            resourceInputs["master"] = state ? state.master : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["password"] = state ? state.password : undefined;
            resourceInputs["podCidr"] = state ? state.podCidr : undefined;
            resourceInputs["serviceCidr"] = state ? state.serviceCidr : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["subnetId"] = state ? state.subnetId : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["userData"] = state ? state.userData : undefined;
            resourceInputs["vpcId"] = state ? state.vpcId : undefined;
        } else {
            const args = argsOrState as Uk8sClusterArgs | undefined;
            if ((!args || args.master === undefined) && !opts.urn) {
                throw new Error("Missing required property 'master'");
            }
            if ((!args || args.password === undefined) && !opts.urn) {
                throw new Error("Missing required property 'password'");
            }
            if ((!args || args.serviceCidr === undefined) && !opts.urn) {
                throw new Error("Missing required property 'serviceCidr'");
            }
            if ((!args || args.subnetId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'subnetId'");
            }
            if ((!args || args.vpcId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'vpcId'");
            }
            resourceInputs["chargeType"] = args ? args.chargeType : undefined;
            resourceInputs["deleteDisksWithInstance"] = args ? args.deleteDisksWithInstance : undefined;
            resourceInputs["duration"] = args ? args.duration : undefined;
            resourceInputs["enableExternalApiServer"] = args ? args.enableExternalApiServer : undefined;
            resourceInputs["imageId"] = args ? args.imageId : undefined;
            resourceInputs["initScript"] = args ? args.initScript : undefined;
            resourceInputs["k8sVersion"] = args ? args.k8sVersion : undefined;
            resourceInputs["kubeProxy"] = args ? args.kubeProxy : undefined;
            resourceInputs["master"] = args ? args.master : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["password"] = args?.password ? pulumi.secret(args.password) : undefined;
            resourceInputs["serviceCidr"] = args ? args.serviceCidr : undefined;
            resourceInputs["subnetId"] = args ? args.subnetId : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["userData"] = args ? args.userData : undefined;
            resourceInputs["vpcId"] = args ? args.vpcId : undefined;
            resourceInputs["apiServer"] = undefined /*out*/;
            resourceInputs["createTime"] = undefined /*out*/;
            resourceInputs["externalApiServer"] = undefined /*out*/;
            resourceInputs["podCidr"] = undefined /*out*/;
            resourceInputs["status"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["password"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Uk8sCluster.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Uk8sCluster resources.
 */
export interface Uk8sClusterState {
    apiServer?: pulumi.Input<string>;
    chargeType?: pulumi.Input<string>;
    createTime?: pulumi.Input<string>;
    deleteDisksWithInstance?: pulumi.Input<boolean>;
    duration?: pulumi.Input<number>;
    enableExternalApiServer?: pulumi.Input<boolean>;
    externalApiServer?: pulumi.Input<string>;
    imageId?: pulumi.Input<string>;
    initScript?: pulumi.Input<string>;
    k8sVersion?: pulumi.Input<string>;
    kubeProxy?: pulumi.Input<inputs.Uk8sClusterKubeProxy>;
    master?: pulumi.Input<inputs.Uk8sClusterMaster>;
    name?: pulumi.Input<string>;
    password?: pulumi.Input<string>;
    podCidr?: pulumi.Input<string>;
    serviceCidr?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    subnetId?: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.Uk8sClusterTimeouts>;
    userData?: pulumi.Input<string>;
    vpcId?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a Uk8sCluster resource.
 */
export interface Uk8sClusterArgs {
    chargeType?: pulumi.Input<string>;
    deleteDisksWithInstance?: pulumi.Input<boolean>;
    duration?: pulumi.Input<number>;
    enableExternalApiServer?: pulumi.Input<boolean>;
    imageId?: pulumi.Input<string>;
    initScript?: pulumi.Input<string>;
    k8sVersion?: pulumi.Input<string>;
    kubeProxy?: pulumi.Input<inputs.Uk8sClusterKubeProxy>;
    master: pulumi.Input<inputs.Uk8sClusterMaster>;
    name?: pulumi.Input<string>;
    password: pulumi.Input<string>;
    serviceCidr: pulumi.Input<string>;
    subnetId: pulumi.Input<string>;
    timeouts?: pulumi.Input<inputs.Uk8sClusterTimeouts>;
    userData?: pulumi.Input<string>;
    vpcId: pulumi.Input<string>;
}
