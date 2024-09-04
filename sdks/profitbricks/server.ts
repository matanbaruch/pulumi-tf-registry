// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class Server extends pulumi.CustomResource {
    /**
     * Get an existing Server resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: ServerState, opts?: pulumi.CustomResourceOptions): Server {
        return new Server(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'profitbricks:index/server:Server';

    /**
     * Returns true if the given object is an instance of Server.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is Server {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === Server.__pulumiType;
    }

    public readonly availabilityZone!: pulumi.Output<string | undefined>;
    public /*out*/ readonly bootCdrom!: pulumi.Output<string>;
    public readonly bootImage!: pulumi.Output<string>;
    public /*out*/ readonly bootVolume!: pulumi.Output<string>;
    public readonly cores!: pulumi.Output<number>;
    public readonly cpuFamily!: pulumi.Output<string>;
    public readonly datacenterId!: pulumi.Output<string>;
    public /*out*/ readonly firewallruleId!: pulumi.Output<string>;
    public readonly imageName!: pulumi.Output<string>;
    public readonly imagePassword!: pulumi.Output<string>;
    public readonly licenceType!: pulumi.Output<string | undefined>;
    public readonly name!: pulumi.Output<string>;
    public readonly nic!: pulumi.Output<outputs.ServerNic>;
    public /*out*/ readonly primaryIp!: pulumi.Output<string>;
    public /*out*/ readonly primaryNic!: pulumi.Output<string>;
    public readonly ram!: pulumi.Output<number>;
    public readonly sshKeyPaths!: pulumi.Output<string[]>;
    public readonly timeouts!: pulumi.Output<outputs.ServerTimeouts | undefined>;
    public readonly volume!: pulumi.Output<outputs.ServerVolume>;

    /**
     * Create a Server resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: ServerArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: ServerArgs | ServerState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as ServerState | undefined;
            resourceInputs["availabilityZone"] = state ? state.availabilityZone : undefined;
            resourceInputs["bootCdrom"] = state ? state.bootCdrom : undefined;
            resourceInputs["bootImage"] = state ? state.bootImage : undefined;
            resourceInputs["bootVolume"] = state ? state.bootVolume : undefined;
            resourceInputs["cores"] = state ? state.cores : undefined;
            resourceInputs["cpuFamily"] = state ? state.cpuFamily : undefined;
            resourceInputs["datacenterId"] = state ? state.datacenterId : undefined;
            resourceInputs["firewallruleId"] = state ? state.firewallruleId : undefined;
            resourceInputs["imageName"] = state ? state.imageName : undefined;
            resourceInputs["imagePassword"] = state ? state.imagePassword : undefined;
            resourceInputs["licenceType"] = state ? state.licenceType : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nic"] = state ? state.nic : undefined;
            resourceInputs["primaryIp"] = state ? state.primaryIp : undefined;
            resourceInputs["primaryNic"] = state ? state.primaryNic : undefined;
            resourceInputs["ram"] = state ? state.ram : undefined;
            resourceInputs["sshKeyPaths"] = state ? state.sshKeyPaths : undefined;
            resourceInputs["timeouts"] = state ? state.timeouts : undefined;
            resourceInputs["volume"] = state ? state.volume : undefined;
        } else {
            const args = argsOrState as ServerArgs | undefined;
            if ((!args || args.cores === undefined) && !opts.urn) {
                throw new Error("Missing required property 'cores'");
            }
            if ((!args || args.datacenterId === undefined) && !opts.urn) {
                throw new Error("Missing required property 'datacenterId'");
            }
            if ((!args || args.nic === undefined) && !opts.urn) {
                throw new Error("Missing required property 'nic'");
            }
            if ((!args || args.ram === undefined) && !opts.urn) {
                throw new Error("Missing required property 'ram'");
            }
            if ((!args || args.volume === undefined) && !opts.urn) {
                throw new Error("Missing required property 'volume'");
            }
            resourceInputs["availabilityZone"] = args ? args.availabilityZone : undefined;
            resourceInputs["bootImage"] = args ? args.bootImage : undefined;
            resourceInputs["cores"] = args ? args.cores : undefined;
            resourceInputs["cpuFamily"] = args ? args.cpuFamily : undefined;
            resourceInputs["datacenterId"] = args ? args.datacenterId : undefined;
            resourceInputs["imageName"] = args ? args.imageName : undefined;
            resourceInputs["imagePassword"] = args?.imagePassword ? pulumi.secret(args.imagePassword) : undefined;
            resourceInputs["licenceType"] = args ? args.licenceType : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nic"] = args ? args.nic : undefined;
            resourceInputs["ram"] = args ? args.ram : undefined;
            resourceInputs["sshKeyPaths"] = args ? args.sshKeyPaths : undefined;
            resourceInputs["timeouts"] = args ? args.timeouts : undefined;
            resourceInputs["volume"] = args ? args.volume : undefined;
            resourceInputs["bootCdrom"] = undefined /*out*/;
            resourceInputs["bootVolume"] = undefined /*out*/;
            resourceInputs["firewallruleId"] = undefined /*out*/;
            resourceInputs["primaryIp"] = undefined /*out*/;
            resourceInputs["primaryNic"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        const secretOpts = { additionalSecretOutputs: ["imagePassword"] };
        opts = pulumi.mergeOptions(opts, secretOpts);
        super(Server.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering Server resources.
 */
export interface ServerState {
    availabilityZone?: pulumi.Input<string>;
    bootCdrom?: pulumi.Input<string>;
    bootImage?: pulumi.Input<string>;
    bootVolume?: pulumi.Input<string>;
    cores?: pulumi.Input<number>;
    cpuFamily?: pulumi.Input<string>;
    datacenterId?: pulumi.Input<string>;
    firewallruleId?: pulumi.Input<string>;
    imageName?: pulumi.Input<string>;
    imagePassword?: pulumi.Input<string>;
    licenceType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nic?: pulumi.Input<inputs.ServerNic>;
    primaryIp?: pulumi.Input<string>;
    primaryNic?: pulumi.Input<string>;
    ram?: pulumi.Input<number>;
    sshKeyPaths?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ServerTimeouts>;
    volume?: pulumi.Input<inputs.ServerVolume>;
}

/**
 * The set of arguments for constructing a Server resource.
 */
export interface ServerArgs {
    availabilityZone?: pulumi.Input<string>;
    bootImage?: pulumi.Input<string>;
    cores: pulumi.Input<number>;
    cpuFamily?: pulumi.Input<string>;
    datacenterId: pulumi.Input<string>;
    imageName?: pulumi.Input<string>;
    imagePassword?: pulumi.Input<string>;
    licenceType?: pulumi.Input<string>;
    name?: pulumi.Input<string>;
    nic: pulumi.Input<inputs.ServerNic>;
    ram: pulumi.Input<number>;
    sshKeyPaths?: pulumi.Input<pulumi.Input<string>[]>;
    timeouts?: pulumi.Input<inputs.ServerTimeouts>;
    volume: pulumi.Input<inputs.ServerVolume>;
}
