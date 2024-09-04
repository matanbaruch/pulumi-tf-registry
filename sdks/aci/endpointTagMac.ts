// *** WARNING: this file was generated by pulumi-language-nodejs. ***
// *** Do not edit by hand unless you're certain you know what you are doing! ***

import * as pulumi from "@pulumi/pulumi";
import * as inputs from "./types/input";
import * as outputs from "./types/output";
import * as utilities from "./utilities";

export class EndpointTagMac extends pulumi.CustomResource {
    /**
     * Get an existing EndpointTagMac resource's state with the given name, ID, and optional extra
     * properties used to qualify the lookup.
     *
     * @param name The _unique_ name of the resulting resource.
     * @param id The _unique_ provider ID of the resource to lookup.
     * @param state Any extra arguments used during the lookup.
     * @param opts Optional settings to control the behavior of the CustomResource.
     */
    public static get(name: string, id: pulumi.Input<pulumi.ID>, state?: EndpointTagMacState, opts?: pulumi.CustomResourceOptions): EndpointTagMac {
        return new EndpointTagMac(name, <any>state, { ...opts, id: id });
    }

    /** @internal */
    public static readonly __pulumiType = 'aci:index/endpointTagMac:EndpointTagMac';

    /**
     * Returns true if the given object is an instance of EndpointTagMac.  This is designed to work even
     * when multiple copies of the Pulumi SDK have been loaded into the same process.
     */
    public static isInstance(obj: any): obj is EndpointTagMac {
        if (obj === undefined || obj === null) {
            return false;
        }
        return obj['__pulumiType'] === EndpointTagMac.__pulumiType;
    }

    /**
     * The annotation of the Endpoint Tag Mac object.
     */
    public readonly annotation!: pulumi.Output<string>;
    public readonly annotations!: pulumi.Output<outputs.EndpointTagMacAnnotation[]>;
    /**
     * The bridge domain name of the Endpoint Tag Mac object.
     */
    public readonly bdName!: pulumi.Output<string>;
    /**
     * The identifier of the Endpoint Tag Mac object.
     */
    public readonly idAttribute!: pulumi.Output<string>;
    /**
     * The MAC address of the Endpoint Tag Mac object.
     */
    public readonly mac!: pulumi.Output<string>;
    /**
     * The name of the Endpoint Tag Mac object.
     */
    public readonly name!: pulumi.Output<string>;
    /**
     * The name alias of the Endpoint Tag Mac object.
     */
    public readonly nameAlias!: pulumi.Output<string>;
    /**
     * The distinguished name (DN) of the parent object.
     */
    public readonly parentDn!: pulumi.Output<string>;
    public readonly tags!: pulumi.Output<outputs.EndpointTagMacTag[]>;

    /**
     * Create a EndpointTagMac resource with the given unique name, arguments, and options.
     *
     * @param name The _unique_ name of the resource.
     * @param args The arguments to use to populate this resource's properties.
     * @param opts A bag of options that control this resource's behavior.
     */
    constructor(name: string, args: EndpointTagMacArgs, opts?: pulumi.CustomResourceOptions)
    constructor(name: string, argsOrState?: EndpointTagMacArgs | EndpointTagMacState, opts?: pulumi.CustomResourceOptions) {
        let resourceInputs: pulumi.Inputs = {};
        opts = opts || {};
        if (opts.id) {
            const state = argsOrState as EndpointTagMacState | undefined;
            resourceInputs["annotation"] = state ? state.annotation : undefined;
            resourceInputs["annotations"] = state ? state.annotations : undefined;
            resourceInputs["bdName"] = state ? state.bdName : undefined;
            resourceInputs["idAttribute"] = state ? state.idAttribute : undefined;
            resourceInputs["mac"] = state ? state.mac : undefined;
            resourceInputs["name"] = state ? state.name : undefined;
            resourceInputs["nameAlias"] = state ? state.nameAlias : undefined;
            resourceInputs["parentDn"] = state ? state.parentDn : undefined;
            resourceInputs["tags"] = state ? state.tags : undefined;
        } else {
            const args = argsOrState as EndpointTagMacArgs | undefined;
            if ((!args || args.bdName === undefined) && !opts.urn) {
                throw new Error("Missing required property 'bdName'");
            }
            if ((!args || args.mac === undefined) && !opts.urn) {
                throw new Error("Missing required property 'mac'");
            }
            if ((!args || args.parentDn === undefined) && !opts.urn) {
                throw new Error("Missing required property 'parentDn'");
            }
            resourceInputs["annotation"] = args ? args.annotation : undefined;
            resourceInputs["annotations"] = args ? args.annotations : undefined;
            resourceInputs["bdName"] = args ? args.bdName : undefined;
            resourceInputs["idAttribute"] = args ? args.idAttribute : undefined;
            resourceInputs["mac"] = args ? args.mac : undefined;
            resourceInputs["name"] = args ? args.name : undefined;
            resourceInputs["nameAlias"] = args ? args.nameAlias : undefined;
            resourceInputs["parentDn"] = args ? args.parentDn : undefined;
            resourceInputs["tags"] = args ? args.tags : undefined;
        }
        opts = pulumi.mergeOptions(utilities.resourceOptsDefaults(), opts);
        super(EndpointTagMac.__pulumiType, name, resourceInputs, opts, false /*dependency*/, utilities.getPackage());
    }
}

/**
 * Input properties used for looking up and filtering EndpointTagMac resources.
 */
export interface EndpointTagMacState {
    /**
     * The annotation of the Endpoint Tag Mac object.
     */
    annotation?: pulumi.Input<string>;
    annotations?: pulumi.Input<pulumi.Input<inputs.EndpointTagMacAnnotation>[]>;
    /**
     * The bridge domain name of the Endpoint Tag Mac object.
     */
    bdName?: pulumi.Input<string>;
    /**
     * The identifier of the Endpoint Tag Mac object.
     */
    idAttribute?: pulumi.Input<string>;
    /**
     * The MAC address of the Endpoint Tag Mac object.
     */
    mac?: pulumi.Input<string>;
    /**
     * The name of the Endpoint Tag Mac object.
     */
    name?: pulumi.Input<string>;
    /**
     * The name alias of the Endpoint Tag Mac object.
     */
    nameAlias?: pulumi.Input<string>;
    /**
     * The distinguished name (DN) of the parent object.
     */
    parentDn?: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.EndpointTagMacTag>[]>;
}

/**
 * The set of arguments for constructing a EndpointTagMac resource.
 */
export interface EndpointTagMacArgs {
    /**
     * The annotation of the Endpoint Tag Mac object.
     */
    annotation?: pulumi.Input<string>;
    annotations?: pulumi.Input<pulumi.Input<inputs.EndpointTagMacAnnotation>[]>;
    /**
     * The bridge domain name of the Endpoint Tag Mac object.
     */
    bdName: pulumi.Input<string>;
    /**
     * The identifier of the Endpoint Tag Mac object.
     */
    idAttribute?: pulumi.Input<string>;
    /**
     * The MAC address of the Endpoint Tag Mac object.
     */
    mac: pulumi.Input<string>;
    /**
     * The name of the Endpoint Tag Mac object.
     */
    name?: pulumi.Input<string>;
    /**
     * The name alias of the Endpoint Tag Mac object.
     */
    nameAlias?: pulumi.Input<string>;
    /**
     * The distinguished name (DN) of the parent object.
     */
    parentDn: pulumi.Input<string>;
    tags?: pulumi.Input<pulumi.Input<inputs.EndpointTagMacTag>[]>;
}
