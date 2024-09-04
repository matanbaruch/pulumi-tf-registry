// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as utilities from "./utilities";

export class SystemDocker extends pulumi.CustomResource {
    /**
     * Get an existing SystemDocker resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: SystemDockerState, opts?: pulumi.CustomResourceOptions): SystemDocker {
        return new SystemDocker(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'fortianalyzer:index/systemDocker:SystemDocker';

    /**
     * Returns true if the given object is an instance of SystemDocker.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is SystemDocker {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === SystemDocker.__pulumiType;
    }

    public readonly cpu!: pulumi.Output<number>;
    public readonly defaultAddressPoolBases!: pulumi.Output<string[]>;
    public readonly defaultAddressPoolSize!: pulumi.Output<number>;
    public readonly dockerUserLoginMax!: pulumi.Output<number>;
    public readonly fortiaiops!: pulumi.Output<string>;
    public readonly fortiauthenticator!: pulumi.Output<string>;
    public readonly fortiportal!: pulumi.Output<string>;
    public readonly fortisigconverter!: pulumi.Output<string>;
    public readonly fortisoar!: pulumi.Output<string>;
    public readonly fortiwlm!: pulumi.Output<string>;
    public readonly fsmcollector!: pulumi.Output<string>;
    public readonly mem!: pulumi.Output<number>;
    public readonly sdwancontroller!: pulumi.Output<string>;
    public readonly status!: pulumi.Output<string>;
    public readonly universalconnector!: pulumi.Output<string>;

    /**
     * Create a SystemDocker resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args?: SystemDockerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: SystemDockerArgs | SystemDockerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as SystemDockerState | undefined;
            resourceInputs["cpu"] = state ? state.cpu : undefined;
            resourceInputs["defaultAddressPoolBases"] = state ? state.defaultAddressPoolBases : undefined;
            resourceInputs["defaultAddressPoolSize"] = state ? state.defaultAddressPoolSize : undefined;
            resourceInputs["dockerUserLoginMax"] = state ? state.dockerUserLoginMax : undefined;
            resourceInputs["fortiaiops"] = state ? state.fortiaiops : undefined;
            resourceInputs["fortiauthenticator"] = state ? state.fortiauthenticator : undefined;
            resourceInputs["fortiportal"] = state ? state.fortiportal : undefined;
            resourceInputs["fortisigconverter"] = state ? state.fortisigconverter : undefined;
            resourceInputs["fortisoar"] = state ? state.fortisoar : undefined;
            resourceInputs["fortiwlm"] = state ? state.fortiwlm : undefined;
            resourceInputs["fsmcollector"] = state ? state.fsmcollector : undefined;
            resourceInputs["mem"] = state ? state.mem : undefined;
            resourceInputs["sdwancontroller"] = state ? state.sdwancontroller : undefined;
            resourceInputs["status"] = state ? state.status : undefined;
            resourceInputs["universalconnector"] = state ? state.universalconnector : undefined;
        } else {
            const args = argsOrState as SystemDockerArgs | undefined;
            resourceInputs["cpu"] = args ? args.cpu : undefined;
            resourceInputs["defaultAddressPoolBases"] = args ? args.defaultAddressPoolBases : undefined;
            resourceInputs["defaultAddressPoolSize"] = args ? args.defaultAddressPoolSize : undefined;
            resourceInputs["dockerUserLoginMax"] = args ? args.dockerUserLoginMax : undefined;
            resourceInputs["fortiaiops"] = args ? args.fortiaiops : undefined;
            resourceInputs["fortiauthenticator"] = args ? args.fortiauthenticator : undefined;
            resourceInputs["fortiportal"] = args ? args.fortiportal : undefined;
            resourceInputs["fortisigconverter"] = args ? args.fortisigconverter : undefined;
            resourceInputs["fortisoar"] = args ? args.fortisoar : undefined;
            resourceInputs["fortiwlm"] = args ? args.fortiwlm : undefined;
            resourceInputs["fsmcollector"] = args ? args.fsmcollector : undefined;
            resourceInputs["mem"] = args ? args.mem : undefined;
            resourceInputs["sdwancontroller"] = args ? args.sdwancontroller : undefined;
            resourceInputs["status"] = args ? args.status : undefined;
            resourceInputs["universalconnector"] = args ? args.universalconnector : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(SystemDocker.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering SystemDocker resources.
 */
export interface SystemDockerState {
    cpu?: pulumi.Input<number>;
    defaultAddressPoolBases?: pulumi.Input<pulumi.Input<string>[]>;
    defaultAddressPoolSize?: pulumi.Input<number>;
    dockerUserLoginMax?: pulumi.Input<number>;
    fortiaiops?: pulumi.Input<string>;
    fortiauthenticator?: pulumi.Input<string>;
    fortiportal?: pulumi.Input<string>;
    fortisigconverter?: pulumi.Input<string>;
    fortisoar?: pulumi.Input<string>;
    fortiwlm?: pulumi.Input<string>;
    fsmcollector?: pulumi.Input<string>;
    mem?: pulumi.Input<number>;
    sdwancontroller?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    universalconnector?: pulumi.Input<string>;
}

/**
 * The set of arguments for constructing a SystemDocker resource.
 */
export interface SystemDockerArgs {
    cpu?: pulumi.Input<number>;
    defaultAddressPoolBases?: pulumi.Input<pulumi.Input<string>[]>;
    defaultAddressPoolSize?: pulumi.Input<number>;
    dockerUserLoginMax?: pulumi.Input<number>;
    fortiaiops?: pulumi.Input<string>;
    fortiauthenticator?: pulumi.Input<string>;
    fortiportal?: pulumi.Input<string>;
    fortisigconverter?: pulumi.Input<string>;
    fortisoar?: pulumi.Input<string>;
    fortiwlm?: pulumi.Input<string>;
    fsmcollector?: pulumi.Input<string>;
    mem?: pulumi.Input<number>;
    sdwancontroller?: pulumi.Input<string>;
    status?: pulumi.Input<string>;
    universalconnector?: pulumi.Input<string>;
}
