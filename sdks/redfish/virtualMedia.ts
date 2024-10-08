// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class VirtualMedia extends pulumi.CustomResource {
    /**
     * Get an existing VirtualMedia resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: VirtualMediaState, opts?: pulumi.CustomResourceOptions): VirtualMedia {
        return new VirtualMedia(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'redfish:index/virtualMedia:VirtualMedia';

    /**
     * Returns true if the given object is an instance of VirtualMedia.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is VirtualMedia {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === VirtualMedia.__pulumiType;
    }

    /**
     * The URI of the remote media to attach to the virtual media
     */
    public readonly image!: pulumi.Output<string>;
    /**
     * Describes whether virtual media is attached or detached
     */
    public /*out*/ readonly inserted!: pulumi.Output<boolean>;
    /**
     * List of server BMCs and their respective user credentials
     */
    public readonly redfishServers!: pulumi.Output<outputs.VirtualMediaRedfishServer[] | undefined>;
    /**
     * System ID of the system
     */
    public readonly systemId!: pulumi.Output<string>;
    /**
     * Indicates how the data is transferred
     */
    public readonly transferMethod!: pulumi.Output<string>;
    /**
     * The protocol used to transfer.
     */
    public readonly transferProtocolType!: pulumi.Output<string>;
    /**
     * Indicates whether the remote device media prevents writing to that media.
     */
    public readonly writeProtected!: pulumi.Output<boolean>;

    /**
     * Create a VirtualMedia resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: VirtualMediaArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: VirtualMediaArgs | VirtualMediaState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as VirtualMediaState | undefined;
            resourceInputs["image"] = state ? state.image : undefined;
            resourceInputs["inserted"] = state ? state.inserted : undefined;
            resourceInputs["redfishServers"] = state ? state.redfishServers : undefined;
            resourceInputs["systemId"] = state ? state.systemId : undefined;
            resourceInputs["transferMethod"] = state ? state.transferMethod : undefined;
            resourceInputs["transferProtocolType"] = state ? state.transferProtocolType : undefined;
            resourceInputs["writeProtected"] = state ? state.writeProtected : undefined;
        } else {
            const args = argsOrState as VirtualMediaArgs | undefined;
            if ((!args || args.image === undefined) && !opts.urn) {
                throw new Error("Missing required property 'image'");
            }
            resourceInputs["image"] = args ? args.image : undefined;
            resourceInputs["redfishServers"] = args ? args.redfishServers : undefined;
            resourceInputs["systemId"] = args ? args.systemId : undefined;
            resourceInputs["transferMethod"] = args ? args.transferMethod : undefined;
            resourceInputs["transferProtocolType"] = args ? args.transferProtocolType : undefined;
            resourceInputs["writeProtected"] = args ? args.writeProtected : undefined;
            resourceInputs["inserted"] = undefined /*out*/;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(VirtualMedia.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering VirtualMedia resources.
 */
export interface VirtualMediaState {
    /**
     * The URI of the remote media to attach to the virtual media
     */
    image?: pulumi.Input<string>;
    /**
     * Describes whether virtual media is attached or detached
     */
    inserted?: pulumi.Input<boolean>;
    /**
     * List of server BMCs and their respective user credentials
     */
    redfishServers?: pulumi.Input<pulumi.Input<inputs.VirtualMediaRedfishServer>[]>;
    /**
     * System ID of the system
     */
    systemId?: pulumi.Input<string>;
    /**
     * Indicates how the data is transferred
     */
    transferMethod?: pulumi.Input<string>;
    /**
     * The protocol used to transfer.
     */
    transferProtocolType?: pulumi.Input<string>;
    /**
     * Indicates whether the remote device media prevents writing to that media.
     */
    writeProtected?: pulumi.Input<boolean>;
}

/**
 * The set of arguments for constructing a VirtualMedia resource.
 */
export interface VirtualMediaArgs {
    /**
     * The URI of the remote media to attach to the virtual media
     */
    image: pulumi.Input<string>;
    /**
     * List of server BMCs and their respective user credentials
     */
    redfishServers?: pulumi.Input<pulumi.Input<inputs.VirtualMediaRedfishServer>[]>;
    /**
     * System ID of the system
     */
    systemId?: pulumi.Input<string>;
    /**
     * Indicates how the data is transferred
     */
    transferMethod?: pulumi.Input<string>;
    /**
     * The protocol used to transfer.
     */
    transferProtocolType?: pulumi.Input<string>;
    /**
     * Indicates whether the remote device media prevents writing to that media.
     */
    writeProtected?: pulumi.Input<boolean>;
}
